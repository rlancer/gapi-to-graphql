import { mapResources } from './mapResources'
import { keys, upperFirst } from './utils'
import { GraphQLSchema, GraphQLObjectType, printSchema } from 'graphql'
import { mapParametersToArguments } from './mapParametersToArguments'
import { Context } from '.'

const mapApi = (apiJson, context: Context) => {
  const { name, id, description, parameters, version, resources, baseUrl, schemas } = apiJson
  const { graphQLTypes, resolvers } = context

  const API_ROOT = `${upperFirst(name)}Resources`

  const queryTypeName = `${upperFirst(name)}ApiQuery`

  resolvers[queryTypeName] = { [`${upperFirst(name)}Api`]: parent => parent }

  resolvers[`${upperFirst(name)}ApiRoot`] = { root: parent => parent }

  const resourceResolvers = {}
  resolvers[API_ROOT] = resourceResolvers

  const fields = mapResources(resources, context.graphQLTypes, resourceResolvers, resolvers)

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

  return { schema: printSchema(schema), resolvers }
}
export { mapApi }
