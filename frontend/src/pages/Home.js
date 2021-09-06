import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function Home() {
  const { loading, error, data } = useFetch("http://localhost:1337/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! :(</p>;

  console.log(data);

  return (
    <div>
      <h1>Home</h1>
      {data.map((post) => (
        <div key={post.id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.body.substring(0, 200)}...</p>
          <Link to={`/post/${post.id}`}>Leer más</Link>
        </div>
      ))}
    </div>
  );
}
