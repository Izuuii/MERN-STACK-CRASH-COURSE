import {React, useEffect, useState} from 'react'
import './App.css'
import {getPosts, getPost, createPost, updatePost, deletePost} from './api.js'
// Importing the necessary functions from api.js

function App() {

  const[posts, setPosts] = useState()

  useEffect(() => {
    async function loadAllPosts(){
      let data = await getPosts() // Fetching all posts using the getPosts function
      if (data){
        setPosts(data) // Setting the fetched posts to state
      }
    }
    loadAllPosts() // Calling the function to load posts
  }, [])// Empty dependency array to run only once on mount

  return (
    <div className="App">
      {JSON.stringify(posts)}
    </div>
  )
}

export default App
