import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [object, setobject] = useState([])

  useEffect(() => {
  async function data() {
      let data = await fetch('https://jsonplaceholder.typicode.com/posts')
      let post = await data.json()
      setobject(post)
    }
    data()
  }, [])
  
  return (
    <>
      <div className="main">
        {
          object.map(obj => {
            return (
              <div className='card' key={obj.id}>
                <h2>{obj.title}</h2>
                <div>{obj.body}</div>
                <div>{obj.userId}</div>
                <div>{obj.id}</div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
