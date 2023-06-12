import React from 'react'
import { useParams } from 'react-router-dom'

function Editpage() {
   const {id} = useParams();
  return (
    <div>
      <h1>Edit post {id}</h1>
    </div>
  )
}

export {Editpage}