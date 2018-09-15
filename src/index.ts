import makeApiRequest from './request'
import parseSchemas from './parseSchemas'
import { upperFirst, keyMap, keys, values } from './utils'
import {
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLEnumType,
  GraphQLObjectTypeConfig,
  GraphQLFieldConfigMap,
  GraphQLFieldConfig,
  printSchema
} from 'graphql'

interface IEntryParams {
  gapiAsJsonSchema: any
}

export default ({ gapiAsJsonSchema }: IEntryParams) => {
  const graphQLTypes = parseSchemas(gapiAsJsonSchema.schemas)

  const uniqueEnumNames = {}

  const getUniqueEnumName = enumName => {
    if (uniqueEnumNames[enumName] === undefined) {
      uniqueEnumNames[enumName] = 0
    } else {
      uniqueEnumNames[enumName]++
    }

    return `${enumName}${uniqueEnumNames[enumName] > 0 ? uniqueEnumNames[enumName] : ''}`
  }

  // todo take parameters and make sure they match up after santizing name
  // need to dermine if enum is uniquie
  const mapParametersToArguments = (parameters, resource) => {
    return keyMap(
      parameters,
      (parameter, parameterDetail) => {
        const { description, required, type, enum: enumDetails, enumDescriptions } = parameterDetail

        const gqlType = (() => {
          if (enumDetails) {
            const enumValues = {}

            enumDetails.forEach((enumName, index) => {
              const v = { value: enumName, description: null }

              if (enumDescriptions) v.description = enumDescriptions[index]

              let enumKeyVal = enumName.replace(/\s/g, '_').replace(/-/g, '_')

              if (!Number.isNaN(+enumName[0])) {
                enumKeyVal = `_${enumKeyVal}`
              }

              if (enumKeyVal === 'true') enumKeyVal = 'TRUE'

              enumValues[enumKeyVal] = v
            })

            const enumName = `${upperFirst(
              parameter
                .replace('$.', 'dollardot')
                .replace(/-/g, '')
                .replace(/\./g, '')
            )}${upperFirst(resource)}EnumParam`
            return new GraphQLEnumType({
              name: getUniqueEnumName(enumName),
              values: enumValues
            })
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

        return {
          type: required ? new GraphQLNonNull(gqlType) : gqlType,
          description
        }
      },
      key =>
        key
          .replace('$.', 'dollardot')
          .replace(/-/g, '')
          .replace(/\./g, '')
    )
  }

  const mapResources = resources => {
    return keyMap(resources, (resource, resourceDetails) => {
      const mapMethod = (methodName, methodValue) => {
        const { description, parameters, httpMethod, path, request, response, supportsMediaDownload } = methodValue

        if (httpMethod !== 'GET') {
          return null
        }

        return {
          type: response ? graphQLTypes[response.$ref] : GraphQLString,
          description,
          args: mapParametersToArguments(parameters, resource),
          resolve: async (parent, args, ctx) => {
            const { rootArgs, rootDefinitions, baseUrl } = parent

            return await makeApiRequest({
              definitions: { ...rootDefinitions, ...parameters },
              args: { ...rootArgs, ...args },
              baseUrl,
              path,
              httpMethod
            })
          }
        }
      }

      const fields = keyMap(resourceDetails.methods, mapMethod) as GraphQLFieldConfigMap<any, any>

      if (keys(fields || {}).length === 0) return null

      return {
        type: new GraphQLObjectType({
          name: `${upperFirst(resource)}_`,
          fields
        }),
        resolve: parent => parent
      }
    })
  }

  const mapApi = apiJson => {
    const { name, id, description, parameters, version, resources, baseUrl, schemas } = apiJson

    const fields = mapResources(resources)

    if (keys(fields).length === 0) {
      throw `No fields for API ${id}`
    }

    const schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: `${upperFirst(name)}ApiQuery`,
        fields: {
          [`${upperFirst(name)}Api`]: {
            type: new GraphQLObjectType({
              name: `${upperFirst(name)}ApiRoot`,
              fields: {
                root: {
                  type: new GraphQLObjectType({
                    name: 'YouTubeAPI',
                    fields: {
                      ...fields
                    }
                  })
                },
                args: mapParametersToArguments(parameters, 'Root')
              }
            })
          }
        }
      })
    })

    return printSchema(schema)

    //     name: ,
    //     // description,
    //     // args: mapParametersToArguments(parameters, "Root"),
    //     // resolve: (_, args) => ({ rootArgs: args, rootDefinitions: parameters, baseUrl })
    //   })

    //    })

    console.log('fields ', fields, '${upperFirst(name)}Api')
  }

  return mapApi(gapiAsJsonSchema)
}
