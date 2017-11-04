import makeApiRequest from './request'
import parseSchemas from './parseSchemas'
import {upperFirst, keyMap} from './utils'

export default ({gapiAsJsonSchema, graphQLModule}) => {

  const graphQLTypes = parseSchemas(gapiAsJsonSchema.schemas, graphQLModule)

  const {GraphQLString, GraphQLObjectType} = graphQLModule

  const mapParametersToArguments = (parameters) => {
    return keyMap(parameters, (parameter, parameterDetail) => {
        const {description, required, type} = parameterDetail
        return {type: GraphQLString, description}
      }, key => key.replace("$.", 'dollardot').replace(/-/g, '')
    )
  }

  const mapMethod = (methodName, methodValue) => {

    const {description, parameters, httpMethod, path, request, response, supportsMediaDownload} = methodValue

    if (httpMethod !== 'GET')
      return null

    return ({
      type: response ? graphQLTypes[response.$ref] : GraphQLString,
      description,
      args: mapParametersToArguments(parameters),
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

  const mapResources = (resources) => {

    return keyMap(resources, (resource, resourceDetails) => {

      const fields = keyMap(resourceDetails.methods, mapMethod)

      if (Object.keys(fields || {} ).length === 0)
        return null

      return {
        type: new GraphQLObjectType({
          name: resource,
          fields
        }),
        resolve: (parent) => parent
      }
    })
  }


  const mapApi = (apiJson) => {


    const {name, id, description, parameters, version, resources, baseUrl, schemas} = apiJson

    const fields = mapResources(resources)

    if (Object.keys(fields).length === 0) {
      throw `No fields for API ${id}`
    }

    return {
      [`${(name + upperFirst(version)).replace('.', '').replace(':', '')}`]: {
        type: new GraphQLObjectType({
          name: upperFirst(name),
          description,
          fields
        }),
        args: mapParametersToArguments(parameters),
        resolve: (_, args) => ({rootArgs: args, rootDefinitions: parameters, baseUrl})
      }
    }
  }


  return mapApi(gapiAsJsonSchema)
}


