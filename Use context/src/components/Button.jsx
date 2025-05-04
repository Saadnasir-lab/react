import React, {useContext} from 'react'
import Component1 from './Component1'
import { countercontext } from '../context/context'

const Button = () => {
  const value = useContext(countercontext)
  return (
    <div>
      <button onClick={()=>value.setCount(value.count+1)}><Component1/></button>
    </div>
  )
}

export default Button