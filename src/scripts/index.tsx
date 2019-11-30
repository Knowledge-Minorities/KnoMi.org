import * as React from "react";
import * as ReactDOM from "react-dom";

import ApolloClient, { HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import fetch from 'node-fetch';


import { Hello } from "../components/hello";

// had to downgrade typescript cause new one not compatible with apollo yet
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  fetch,
});

const QUERY = gql`{
    posts {
        title
        }
}`;

client
  .query({
    query: QUERY
  })
  .then(result => console.log(result));

  ReactDOM.render(
    <ApolloProvider client={client}>
        <Hello compiler={"Typescript"} framework={"React"} />
    </ApolloProvider>,
    document.getElementById("example")
);