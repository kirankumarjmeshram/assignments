import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h4>Tags:</h4>
      <ul>
        {post.tags.map(tag => <li key={tag}>#{tag}</li>)}
      </ul>
    </div>
  );
}

export default PostDetails;
