# Gapi to GraphQL 

Converts any Google Data API to a GraphQL API via the [Google API Discovery Service](https://developers.google.com/discovery/)

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
// bring your own api descriptor
import YouTubeAPI from './google_apis/youtube'

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