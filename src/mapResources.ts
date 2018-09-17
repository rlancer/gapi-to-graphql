import { keyMap, keys, upperFirst } from './utils'
import { GraphQLString, GraphQLObjectType } from 'graphql'
import { mapParametersToArguments } from './mapParametersToArguments'
import makeApiRequest from './request'
import { Context } from '.'

const mapResources = (resources, context: Context) => {
  const { queryResolvers, resolverMap, graphQLTypes } = context
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

    const fields = keyMap(resourceDetails.methods, mapMethod)

    if (keys(fields || {}).length === 0) {
      return null
    }

    resolverMap[resource] = parent => parent

    return {
      type: new GraphQLObjectType({
        name: `${upperFirst(resource)}_`,
        fields
      }),
      resolve: parent => parent
    }
  })
}

export { mapResources }
