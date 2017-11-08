# Gapi to GraphQL 

Converts any Google Data API to a GraphQL API via the [Google API Discovery Service](https://developers.google.com/discovery/)

**Limitations** 

* Read only, for now. [ Join the team](https://www.collaborizm.com/project/Skkk3bBA-) to help change that. 
* Downloads are not implemented 


## Supports 138 Google APIs!

[Full list of APIs their `require()` path](/docs/GoogleAPIs.md)

## Usage

```bash

# npm users
npm i gapi-to-graphql --save

# yarn users 
yarn add gapi-to-graphql 
``` 

```javascript
import gql from 'graphql'
import graphqlHTTP from 'express-graphql'
import express from 'express'
import gapiToGraphQL from 'gapi-to-graphql'
// Use any of the APIs included under the google_apis/ folder, or bring your own API descriptor 
import YouTubeAPI from 'gapi-to-graphql/google_apis/youtube-v3'

const app = express()

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
console.log('Listing on port ', port)
```

## Examples 
Using React https://github.com/rlancer/gapi-to-graphql-example-yt-react

## Should this API be exposed to web clients

Yes, but be sure to add API keys and sanitize other parameters via a middleware solution like https://www.npmjs.com/package/graphql-add-middleware 


## Contributors 

Pull requests welcome!
Join the [project on Collaborizm](https://www.collaborizm.com/project/Skkk3bBA-)

