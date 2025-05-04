import { useState , useMemo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const num = new Array(100_000).fill(0).map((_,i)=>{
    return{
      index:i,
    isMagical: i==99_999
    }
  })



  const [count, setCount] = useState(0)
  const [number, setnumber] = useState(num)

  // let Magical=number.find(i=>i.isMagical)       // Expensive Computation
  const Magical=useMemo(() => number.find(i=>i.isMagical), [number])

  return (
    <>
      <div>
        <div>{Magical.index}</div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
