import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors , isSubmitting},
  } = useForm()

// const delay = (d)=>{
//   return new Promise((resolve , reject)=>{
//     setTimeout(() => {
//       resolve()
//     }, d * 1000);
//   })
// }

  const onSubmit = async(data) => {
    // await delay(2)
    let a = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let b = await a.text()
    console.log(data)
    if (data.password !== "harryharry") {
      setError("myform" , {message:"The Password is incorrect"})
    }
    if (data.username === "fahad") {
      setError("blocked" , {message:"The user is blocked"})
    }
  }

  return (
    <div>
      {isSubmitting  &&  <div>Loading...</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex gap-2'>
        <label htmlFor="">Username</label>
        <input type="text" disabled={isSubmitting} {...register("username",{required:{value:true , message:"This feild is required"},minLength:{value:3,message:"Min length is 3"}})} />
        {errors.username  &&  <div className='text-red'>{errors.username.message}</div>}
        </div>
        <br />
        <div className='flex gap-2'>
        <label htmlFor="">Password</label>
        <input type="password" disabled={isSubmitting} {...register("password" , {required:{value:true , message:"This feild is required"} , minLength:{value:8 , message:"Min length is 8"}})} />
        {errors.password && <div>{errors.password.message}</div>}
        </div>
        <br />
        <input type="submit" value={"Submit"} disabled={isSubmitting} />
        {errors.myform && <div className='text-red'>{errors.myform.message}</div>}
        {errors.blocked && <div className='text-red'>{errors.blocked.message}</div>}
        
      </form>
    </div>
  )

}

export default App
