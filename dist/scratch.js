"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
console.log("hello");
var schema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: "Query",
        fields: {
            hello: {
                type: graphql_1.GraphQLString
            }
        }
    })
});
console.log(graphql_1.printSchema(schema));
//# sourceMappingURL=scratch.js.map