import React from 'react'
import { useState } from 'react'

const Signin = () => {
    const [formdata,setformdata]=useState({
        email:"",
        password:""
    })
    const handler=(e)=>{
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value,
        })
    }
    const handelsubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
    }
  return (
    <div>
        <form className="signin">
        <div>
            <input type="email" placeholder="type your email" onChange={handler} name="email"></input>
        </div>
       <div>
            <input type="text" placeholder="type your Name" onChange={handler} name="passwrod"></input>
        </div>
        <button onClick={handelsubmit}>submit</button>
        </form>
    </div>

  )
}

export default Signin
