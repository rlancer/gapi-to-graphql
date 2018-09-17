import { mapResources } from './mapResources'
import { keys, upperFirst } from './utils'
import { GraphQLSchema, GraphQLObjectType, printSchema } from 'graphql'
import { mapParametersToArguments } from './mapParametersToArguments'
import { Context } from '.'

const mapApi = (apiJson, context: Context) => {
  const { name, id, description, parameters, version, resources, baseUrl, schemas } = apiJson
  const { graphQLTypes, resolverMap, queryResolvers } = context

  const fields = mapResources(resources, context)

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
                  name: `${upperFirst(name)}ApiRootObject`,
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

  queryResolvers[`${upperFirst(name)}Api`] = parent => parent

  return { schema: printSchema(schema), resolverMap: { query: queryResolvers } }
}
export { mapApi }
