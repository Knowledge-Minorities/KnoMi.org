import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";

export interface HelloProps {
    compiler: string;
    framework: string;
}

const QUERY = gql`{
    posts {
        title
        }
}`;

function Posts() {
    const { loading, error, data } = useQuery(QUERY);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.posts.map(({ title }) => (
      <div key={title}>
        <p>
            {title}
        </p>
      </div>
    ));
  }

export const Hello = (props: HelloProps) => Posts()
//<h1>Hello from {props.compiler} and {props.framework}</h1>;