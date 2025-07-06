import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/posts")
      .then(res => setPosts(res.data.posts))
      .catch(err => console.error(err));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Blog Posts</h2>
      <input
        type="text"
        placeholder="Search by title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
      />
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}><strong>{post.title}</strong></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
