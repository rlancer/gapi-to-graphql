[![npm version](https://badge.fury.io/js/graphql-add-middleware.svg)](https://badge.fury.io/js/gapi-to-graphql)
[![Collaborizm](https://www.collaborizm.com/GitHubBadge.svg)](https://www.collaborizm.com/project/Skkk3bBA-)

# Gapi to GraphQL 

Converts almost any Google Data API to a GraphQL API via the [Google API Discovery Service](https://developers.google.com/discovery/)

**Limitations** 

* Read only, for now. [ Join the team](https://www.collaborizm.com/project/Skkk3bBA-) to help change that
* No downloads (think Drive documents ... )


## Supports 138 Google APIs!

[Full list of APIs and their `require()` path](/docs/GoogleAPIs.md)

## Usage

```bash

# npm users
npm i gapi-to-graphql --save

# yarn users 
yarn add gapi-to-graphql 

``` 


## Example on the server

> index.mjs 
```javascript
import gql from 'graphql'
import graphqlHTTP from 'express-graphql'
import express from 'express'
import gapiToGraphQL from 'gapi-to-graphql'
// Use any of the APIs included under the google_apis/ folder, or bring your own API descriptor
import YouTubeAPI from 'gapi-to-graphql/google_apis/youtube-v3'

const app = express()

// need this separate assignment when using nodes experimental modules feature 
const {GraphQLObjectType, GraphQLSchema} = gql

app.use(
  '/graphql',
  graphqlHTTP({
    schema: new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {...gapiToGraphQL({gapiAsJsonSchema: YouTubeAPI, graphQLModule: gql})}
      })
    }),
    graphiql: true
  })
)



const port = 4000
app.listen(port)
console.log(`Please open http://localhost:${port}/graphql`)
```

> Run  example with `node --experimental-modules index.mjs`

## Live example YouTube Hunt (Client and Server)

temporarily down. Going to redploy to Heroku Soon! 

GitHub: https://github.com/rlancer/yt-gql-example

UI: https://youtube-gql-example.appspot.com/

GraphiQL: https://youtube-gql-example.appspot.com/graphql

GraphiQL with a query: [URL too long!](https://youtube-gql-example.appspot.com/graphql?query=%7B%0A%20%20youtubeV3(key%3A%20%22nokeyneed%22)%20%7B%0A%20%20%20%20search%20%7B%0A%20%20%20%20%20%20list(q%3A%20%22dogs%22%2C%20part%3A%20%22snippet%22)%20%7B%0A%20%20%20%20%20%20%20%20items%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20videoId%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20snippet%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

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
