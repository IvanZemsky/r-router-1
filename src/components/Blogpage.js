import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

function Blogpage() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      Blogpage
      <Link to='/posts/new'>Add new post</Link>
      {
        posts.map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))
      }
    </div>
  )
}

export {Blogpage}