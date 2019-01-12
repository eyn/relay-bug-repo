const {
    ApolloServer,
    gql
} = require('apollo-server');

// Construct a schema, using GraphQL schema language
var typeDefs = gql `
  interface Node {
    id: ID!
  }

  type TestResponse implements Node {
      id: ID!,
      text: String,
      date: String
  }

  type Query {
    hello(id: ID!): TestResponse,
    node(id: ID!): Node
  }
`;

var resolvers = {
    Query: {
        hello: (_, {
            id
        }) => {
            return {
                id,
                text: "Hello World",
                date: Date.now().toString()
            };
        },
        node: (_, {
            id
        }) => {
            return {
                id,
                text: "Hello World",
                date: Date.now().toString()
            };
        }
    },
    Node: {
        __resolveType: () => {
            return "TestResponse"
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});
server.listen().then(({
    url
}) => {
    console.log(`🚀  Server ready at ${url}`);
});