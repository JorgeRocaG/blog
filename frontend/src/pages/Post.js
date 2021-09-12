import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`;

export default function Post() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(POST, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <div>
      <h1>{data.post.title}</h1>
      <p>{data.post.body}</p>
    </div>
  );
}
