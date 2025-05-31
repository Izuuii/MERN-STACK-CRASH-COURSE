import {React, useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const[data, setData] = useState()

  useEffect(() => {
    async function grabData() {
      const response = await axios.get('http://localhost:3000/posts')
      if(response.status === 200) {
        setData(response.data)
        console.log(response.data)
      }
      else {
        console.error('Error fetching data:', response.statusText)
      }
    }

  grabData()
  }, [])// Empty dependency array to run only once on mount

  return (
    <div className="App">
      {JSON.stringify(data)}
      <h1>Posts</h1>
    </div>
  )
}

export default App
