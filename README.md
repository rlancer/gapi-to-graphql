[![npm version](https://badge.fury.io/js/graphql-add-middleware.svg)](https://badge.fury.io/js/gapi-to-graphql)

# Gapi to GraphQL

Converts almost any Google Data API to a GraphQL API via the [Google API Discovery Service](https://developers.google.com/discovery/)

**Limitations**

- Read only
- No downloading (think Drive documents ... )

## Supports 138 Google APIs!

[Full list of APIs and their `require()` path](/docs/GoogleAPIs.md)

## Usage

```bash
npm i gapi-to-graphql --save
```

## Example on the server

> index.mjs

```javascript
import { gql, ApolloServer } from 'apollo-server'
import gapiToGraphQL from 'gapi-to-graphql'
import YouTubeAPI from 'gapi-to-graphql/google_apis/youtube-v3'

const { schema, resolvers } = gapiToGraphQL({ gapiAsJsonSchema: YouTubeAPI })

const server = new ApolloServer({
  typeDefs: gql`
    ${schema}
  `,
  resolvers
})

server.listen({ port: 3031 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
```

> Run example with `node --experimental-modules index.mjs`

## Query usage

```graphql
{
  YoutubeApi(key: "YOUR_API_KEY") {
    search {
      list(q: "graphql", part: "snippet") {
        items {
          id {
            videoId
          }
          snippet {
            title
            thumbnails {
              default {
                url
              }
            }
          }
        }
      }
    }
  }
}
```

## Live example YouTube Hunt (Client and Server)

temporarily down. Going to redploy to Heroku Soon!

GitHub: https://github.com/rlancer/yt-gql-example

UI: https://youtube-gql-example.appspot.com/

GraphiQL: https://youtube-gql-example.appspot.com/graphql

GraphiQL with a query: [URL too long!](<https://youtube-gql-example.appspot.com/graphql?query=%7B%0A%20%20youtubeV3(key%3A%20%22nokeyneed%22)%20%7B%0A%20%20%20%20search%20%7B%0A%20%20%20%20%20%20list(q%3A%20%22dogs%22%2C%20part%3A%20%22snippet%22)%20%7B%0A%20%20%20%20%20%20%20%20items%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20videoId%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20snippet%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

![youtubehunt](https://user-images.githubusercontent.com/1339007/34919957-f4649db6-f938-11e7-8ef6-b7aa2889dc49.png)

## FAQ

**Should this API be exposed to web clients**

Yes, but be sure to add API keys and sanitize other parameters via a middleware solution like https://www.npmjs.com/package/graphql-add-middleware

**Can I use this in production**

Yes, since all its doing is making API calls it's fairly safe to use in production if your use cases have been well tested in development.

## Contributors

Pull requests welcome!
Join the [project on Collaborizm](https://www.collaborizm.com/project/Skkk3bBA-)

## License

gapi-to-graphql is MIT licensed.
