import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [btn, setbtn] = useState(false)
  const [todos, setTodo] = useState([
    {
      title: "First todo",
      desc: "This is the description of First todo"
    },
    {
      title: "Second todo",
      desc: "This is the description of Second todo"
    },
    {
      title: "Third todo",
      desc: "This is the description of Third todo"
    },
    {
      title: "Fourth todo",
      desc: "This is the description of Fourth todo"
    },]
  )

  // const Todo=({props})=>{
  //   return(<>
  //   <div className='m-2 rounded-lg p-2 border-2' key={props.title}>
  //       <div>{props.title}</div>
  //       <div>{props.desc}</div>
  //     </div>
  //     </>)
  // }

  return (
    <>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className='text-[clamp(1.5rem,5vw,4rem)] text-9xl'>Vite + React</div>
      <div className="card">

        {btn ? <button>Hey</button> : "Thenga"}
        {/* {btn&&<button>Hey</button>} */}
        {todos.map(todo => {
          //  return <Todo props={todo}/>
          return (
            <div className='m-2 rounded-lg p-2 border-2' key={todo.title}>
              <div className='text-[20px]'>{todo.title}</div>
              <div>{todo.desc}</div>
            </div>
          )
        })}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={() => setbtn(!btn)}>
          Toggle button
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
