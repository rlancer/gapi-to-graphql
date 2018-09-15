import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  printSchema
} from "graphql";
console.log("hello");

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      hello: {
        type: GraphQLString
      }
    }
  })
});

console.log(printSchema(schema));
