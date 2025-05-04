import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [form, setform] = useState({name:"",email:""})

const handleclick = () => {
  alert("i was clicked")
}

const handlechange = (e) => {
  setform({...form,[e.target.name]:e.target.value})
  console.log(form)
}


  return (
    <>
    <div className="app">
      <button onClick={handleclick}>Click me</button>
      <input type="text" name="name" onChange={handlechange}/>
      <input type="email" name='email' onChange={handlechange}/>
    </div>
    </>
  )
}

export default App