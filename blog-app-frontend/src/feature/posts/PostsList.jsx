import React, { useState, useEffect } from 'react'
import { API_URL } from '../../constants'

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json()
        setPosts(data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
        console.error("Failed to fetch posts: ", e);
      }
    }
    loadPosts();
  }, []);

  return (
    <div>
      {posts.length > 0 ? posts.map((post) => (
        <div key={post.id} className='post-container'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )) : <p>Loading...</p>}
    </div>
  )
}

export default PostsList