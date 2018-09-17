import parseSchemas from './parseSchemas'
import { mapApi } from './mapApi'

interface IEntryParams {
  gapiAsJsonSchema: any
}

export interface Context {
  resolverMap
  queryResolvers
  graphQLTypes
}

export default ({ gapiAsJsonSchema }: IEntryParams) => {
  const queryResolvers = {}
  const resolverMap = {}

  const graphQLTypes = parseSchemas(gapiAsJsonSchema.schemas)

  const context = { resolverMap, queryResolvers, graphQLTypes }

  return mapApi(gapiAsJsonSchema, context)
}
