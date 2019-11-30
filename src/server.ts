const http = require('http');
const path = require('path');

const connect = require('connect');
const serveStatic = require('serve-static');

const { ApolloServer, gql } = require('apollo-server');

const hostname = process.argv[2];
const httpServerPort = Number(process.argv[3]);

let httpServer = connect();
httpServer.use(serveStatic(__dirname + "/public"));
httpServer.use(serveStatic(__dirname + "/scripts"));
httpServer.listen(httpServerPort, hostname, () => {
    console.log(`Server running at http://${hostname}:${httpServerPort}/index.html`);
});


// graphql schema
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Post" type defines the queryable fields for every book in our data source.
  type Post {
    title: String
    text: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "posts" query returns an array of zero or more Posts (defined above).
  type Query {
    posts: [Post]
  }
`;

const posts = [
    {
      title: 'Title of post 1',
      text: 'Text of post 1',
    },
    {
      title: 'Title of post 2',
      text: 'Text of post 2',
    }
  ];

  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "posts" array above.
const resolvers = {
    Query: {
      posts: () => posts,
    },
  };

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


// node build/server.js 127.0.0.1 8080