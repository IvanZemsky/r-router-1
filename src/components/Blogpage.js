import { getByPlaceholderText } from '@testing-library/react';
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { BlockFilter } from './BlockFilter';

function Blogpage() {

  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  // URL.ru/post?post=abc&data=

  const latest = searchParams.has('latest');

  const startsFrom = latest ? 80 : 1;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Blogpage</h1>
      <BlockFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams}/>
      <Link to='/posts/new'>Add new post</Link>
      {
        posts.filter(
          post => post.title.includes(postQuery) && post.id >= startsFrom
        ).map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))
      }
    </div>
  )
}

export {Blogpage}