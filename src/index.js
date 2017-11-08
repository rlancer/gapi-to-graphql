import makeApiRequest from './request'
import parseSchemas from './parseSchemas'
import {upperFirst, keyMap, keys, values} from './utils'

export default ({gapiAsJsonSchema, graphQLModule}) => {

  const graphQLTypes = parseSchemas(gapiAsJsonSchema.schemas, graphQLModule)

  const {GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLInt, GraphQLEnumType} = graphQLModule

  const uniqueEnumNames = {}

  const getUniqueEnumName = enumName => {

    if (uniqueEnumNames[enumName] === undefined) {
      uniqueEnumNames[enumName] = 0
    }
    else {
      uniqueEnumNames[enumName]++
    }

    return `${enumName}${uniqueEnumNames[enumName] > 0 ? uniqueEnumNames[enumName] : ''}`
  }

  // todo take parameters and make sure they match up after santizing name
// need to dermine if enum is uniquie
  const mapParametersToArguments = (parameters, resource) => {
    return keyMap(parameters, (parameter, parameterDetail) => {
        const {description, required, type, enum: enumDetails, enumDescriptions} = parameterDetail


        const gqlType = (() => {

          if (enumDetails) {

            const enumValues = {}

            enumDetails.forEach((enumName, index) => {

              const v = {value: enumName}

              if (enumDescriptions)
                v.description = enumDescriptions[index]

              let enumKeyVal = enumName.replace(/\s/g, '_').replace(/-/g, '_')


              if (!Number.isNaN(+enumName[0])) {
                enumKeyVal = `_${enumKeyVal}`

              }

              if (enumKeyVal === 'true')
                enumKeyVal = 'TRUE'

              enumValues[enumKeyVal] = v
            })

            const enumName = `${upperFirst(parameter.replace("$.", 'dollardot').replace(/-/g, '').replace(/\./g, ''))}${upperFirst(resource)}EnumParam`
            return new GraphQLEnumType({
              name: getUniqueEnumName(enumName),
              values: enumValues
            });
          }

          switch (type) {
            case 'string':
              return GraphQLString
            case 'boolean':
              return GraphQLBoolean
            case 'integer':
              return GraphQLInt
          }

          console.log('Unknown argument type', type)

          return GraphQLString
        })()

        return {type: required ? new GraphQLNonNull(gqlType) : gqlType, description}
      }, key => key.replace("$.", 'dollardot').replace(/-/g, '').replace(/\./g, '')
    )
  }

  const mapResources = (resources) => {


    return keyMap(resources, (resource, resourceDetails) => {


      const mapMethod = (methodName, methodValue) => {

        const {description, parameters, httpMethod, path, request, response, supportsMediaDownload} = methodValue

        if (httpMethod !== 'GET')
          return null

        return ({
          type: response ? graphQLTypes[response.$ref] : GraphQLString,
          description,
          args: mapParametersToArguments(parameters, resource),
          resolve: async (parent, args, ctx) => {

            const {rootArgs, rootDefinitions, baseUrl} = parent

            return await makeApiRequest({
              definitions: {...rootDefinitions, ...parameters},
              args: {...rootArgs, ...args},
              baseUrl,
              path,
              httpMethod
            })
          }
        })
      }

      const fields = keyMap(resourceDetails.methods, mapMethod)

      if (keys(fields || {}).length === 0)
        return null

      return {
        type: new GraphQLObjectType({
          name: `${upperFirst(resource)}_`,
          fields
        }),
        resolve: (parent) => parent
      }
    })
  }


  const mapApi = (apiJson) => {


    const {name, id, description, parameters, version, resources, baseUrl, schemas} = apiJson

    const fields = mapResources(resources)

    if (keys(fields).length === 0) {
      throw `No fields for API ${id}`
    }


    return {
      [`${(name + upperFirst(version)).replace('.', '').replace(':', '')}`]: {
        type: new GraphQLObjectType({
          name: `${upperFirst(name)}Api`,
          description,
          fields
        }),
        args: mapParametersToArguments(parameters, 'Root'),
        resolve: (_, args) => ({rootArgs: args, rootDefinitions: parameters, baseUrl})
      }
    }
  }

  return mapApi(gapiAsJsonSchema)
}