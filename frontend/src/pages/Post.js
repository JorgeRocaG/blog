import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Post() {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    "http://localhost:1337/posts/" + id
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
