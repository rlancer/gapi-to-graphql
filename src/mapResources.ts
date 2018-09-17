import { keyMap, keys, upperFirst } from './utils'
import { GraphQLString, GraphQLObjectType } from 'graphql'
import { mapParametersToArguments } from './mapParametersToArguments'
import makeApiRequest from './request'
import { Context } from '.'
import { resolve } from 'url'

const mapResources = (resources, graphQLTypes, resourceResolvers, resolverMap) => {
  return keyMap(resources, (resource, resourceDetails) => {
    const resourceName = `${upperFirst(resource)}_`

    const mapMethod = (methodName, methodValue) => {
      const { description, parameters, httpMethod, path, request, response, supportsMediaDownload } = methodValue

      if (httpMethod !== 'GET') {
        return null
      }

      const resolve = async (parent, args, ctx) => {
        const { rootArgs, rootDefinitions, baseUrl } = parent

        console.log('resolve', parent, args)

        return await makeApiRequest({
          definitions: { ...rootDefinitions, ...parameters },
          args: { ...rootArgs, ...args },
          baseUrl,
          path,
          httpMethod
        })
      }

      if (!resolverMap[resourceName]) {
        resolverMap[resourceName] = {}
      }
      resolverMap[resourceName][methodName] = resolve

      return {
        type: response ? graphQLTypes[response.$ref] : GraphQLString,
        description,
        args: mapParametersToArguments(parameters, resource)
      }
    }

    const fields = keyMap(resourceDetails.methods, mapMethod)

    if (keys(fields || {}).length === 0) {
      return null
    }

    resourceResolvers[resource] = parent => parent

    return {
      type: new GraphQLObjectType({
        name: resourceName,
        fields
      })
    }
  })
}

export { mapResources }
