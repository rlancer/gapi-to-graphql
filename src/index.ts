import parseSchemas from './parseSchemas'
import { mapApi } from './mapApi'

interface IEntryParams {
  gapiAsJsonSchema: any
}

export interface Context {
  resolvers
  queryResolvers
  graphQLTypes
}

// structure
// api -> resources -> methods

export default ({ gapiAsJsonSchema }: IEntryParams) => {
  const queryResolvers = {}
  const resolvers = {}

  const graphQLTypes = parseSchemas(gapiAsJsonSchema.schemas)

  const context = { resolvers, queryResolvers, graphQLTypes }

  return mapApi(gapiAsJsonSchema, context)
}
