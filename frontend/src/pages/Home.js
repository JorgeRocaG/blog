import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      body
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! :(</p>;

  console.log(data);

  return (
    <div>
      <h1>Home</h1>
      {data.posts.map((post) => (
        <div key={post.id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.body.substring(0, 200)}...</p>
          <Link to={`/post/${post.id}`}>Leer más</Link>
        </div>
      ))}
    </div>
  );
}
