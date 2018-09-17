import { gql, ApolloServer } from 'apollo-server'
import gapiToGraphQL from '.'
// Use any of the APIs included under the google_apis/ folder, or bring your own API descriptor
import YouTubeAPI from './google_apis/youtube-v3'

// need this separate assignment when using nodes experimental modules feature
const { schema, resolverMap } = gapiToGraphQL({ gapiAsJsonSchema: YouTubeAPI })

console.log(schema)

const server = new ApolloServer({
  typeDefs: gql`
    ${schema}
  `,
  resolvers: resolverMap
})

server.listen({ port: 3031 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
