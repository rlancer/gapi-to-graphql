import { mapResources } from './mapResources'
import { keys, upperFirst } from './utils'
import { GraphQLSchema, GraphQLObjectType, printSchema } from 'graphql'
import { mapParametersToArguments } from './mapParametersToArguments'
import { Context } from '.'

const mapApi = (apiJson, context: Context) => {
  const { name, id, description, parameters, version, resources, baseUrl, schemas } = apiJson
  const { graphQLTypes, resolverMap } = context

  const APIResources = `${upperFirst(name)}Resources`

  const queryTypeName = `${upperFirst(name)}ApiQuery`


  resolverMap[queryTypeName] = { [`${upperFirst(name)}Api`]: (_, args)  => ({rootArgs: args, rootDefinitions: parameters, baseUrl}) }

  const resourceResolvers = {}
  resolverMap[APIResources] = resourceResolvers

  const fields = mapResources(resources, context.graphQLTypes, resourceResolvers, resolverMap)

  if (keys(fields).length === 0) {
    throw `No fields for API ${id}`
  }
  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: queryTypeName,
      fields: {
        [`${upperFirst(name)}Api`]: {
          args: mapParametersToArguments(parameters, 'Root'),
          type: new GraphQLObjectType({
            name: APIResources,
            fields
          })
        }
      }
    })
  })

  return { schema: printSchema(schema), resolverMap }
}
export { mapApi }
