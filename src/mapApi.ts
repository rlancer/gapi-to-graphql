import { mapResources } from './mapResources'
import { keys, upperFirst } from './utils'
import { GraphQLSchema, GraphQLObjectType, printSchema } from 'graphql'
import { mapParametersToArguments } from './mapParametersToArguments'
import { Context } from '.'

const mapApi = (apiJson, context: Context) => {
  const { name, id, description, parameters, version, resources, baseUrl, schemas } = apiJson
  const { graphQLTypes, resolverMap } = context

  const API_ROOT = `${upperFirst(name)}ApiRootObject`

  const queryTypeName = `${upperFirst(name)}ApiQuery`

  resolverMap[queryTypeName] = { root: parent => parent }
  resolverMap[`${upperFirst(name)}Api`] = parent => parent

  const apiRootResolvers = {}
  resolverMap[API_ROOT] = apiRootResolvers

  const fields = mapResources(resources, context.graphQLTypes, apiRootResolvers)

  if (keys(fields).length === 0) {
    throw `No fields for API ${id}`
  }
  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: queryTypeName,
      fields: {
        [`${upperFirst(name)}Api`]: {
          type: new GraphQLObjectType({
            name: `${upperFirst(name)}ApiRoot`,
            fields: {
              root: {
                type: new GraphQLObjectType({
                  name: API_ROOT,
                  fields
                }),
                args: mapParametersToArguments(parameters, 'Root')
              }
            }
          })
        }
      }
    })
  })

  return { schema: printSchema(schema), resolverMap }
}
export { mapApi }
