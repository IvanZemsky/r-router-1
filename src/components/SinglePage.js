import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

function SinglePage() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const goBack = () => navigate(-1); // на 1 страницу назад
  const goHome = () => navigate('/', {replace: true}); // возвращает на указанный адрес

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  // <button onClick={goHome}>Go home</button> - плохой подход, есть Link

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <button onClick={goHome}>Go home</button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`edit`}>Edit this post</Link>
        </>
      )}
    </div>
  )
}

export {SinglePage}