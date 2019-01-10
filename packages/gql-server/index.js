var express = require('express');
var graphqlHTTP = require('express-graphql');
var {
    buildSchema
} = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  interface Node {
    id: ID!
  }

  type HelloResponse implements Node {
      id: ID!
      text: String,
      date: String
  }

  type Query {
    hello(id: ID!): HelloResponse,
    node(id: ID!): Node
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: ({id}) => {
        return {
            id,
            text: "Hello World",
            date: Date.now().toString()
        };
    },
    node: id => {
        return {
            id,
            text: "Hello World",
            date: Date.now().toString()
        };
    }
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    resolverValidationOptions: {
        requireResolversForResolveType: false
    }
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');