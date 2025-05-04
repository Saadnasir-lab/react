import React, { memo } from 'react'

const Navbar = ({adjective,getadjective}) => {
  return (
    <div>
      <div>I am a {adjective} Navbar</div> 
       <button onClick={()=>getadjective()}>Click me</button>
       {getadjective()}
    </div>
  )
}

export default memo(Navbar)
