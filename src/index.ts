import parseSchemas from './parseSchemas'
import { mapApi } from './mapApi'

interface IEntryParams {
  gapiAsJsonSchema: any
}

export interface Context {
  resolverMap
  queryResolvers
  graphQLTypes
  resoversResources
}

// structure
// api -> resources -> methods

export default ({ gapiAsJsonSchema }: IEntryParams) => {
  const queryResolvers = {}
  const resolverMap = {}
  const resoversResources = {}

  const graphQLTypes = parseSchemas(gapiAsJsonSchema.schemas)

  const context = { resolverMap, resoversResources, queryResolvers, graphQLTypes }

  return mapApi(gapiAsJsonSchema, context)
}
