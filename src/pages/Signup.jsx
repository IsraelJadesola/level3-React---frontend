import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'



const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    let userData = {
      firstName,
      lastName,
      email,
      password
    }
    console.log(userData)
  }

  return (
    <div className="container">
        <div className="form_area">
            <p className="title">SIGN UP</p>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className="form_group">
                    <label className="sub_title" for="name">First Name</label>
                    <input name="firstName" placeholder="Enter your first name" className="form_style" type="text" onChange={(e) =>{setFirstName(e.target.value)}}/>
                </div>
                <div className="form_group">
                    <label className="sub_title" for="name">Last Name</label>
                    <input name="lastName" placeholder="Enter your last name" className="form_style" type="text" onChange={(e) =>{setLastName(e.target.value)}}/>
                </div>
                <div className="form_group">
                    <label className="sub_title" for="email">Email</label>
                    <input name='email' placeholder="Enter your email" id="email" className="form_style" type="email" onChange={(e) =>{setEmail(e.target.value)}}/>
                </div>
                <div className="form_group">
                    <label className="sub_title" for="password">Password</label>
                    <input name='password' placeholder="Enter your password" id="password" className="form_style" type="password" onChange={(e) =>{setPassword(e.target.value)}}/>
                </div>
                <div>
                    <button className="btns" onClick={() =>{handleSubmit()} }> SIGN UP</button>
                    <p>Have an Account? < Link to="/signin">Login Here!</Link></p>
                </div>
              </form>
          </div>
    </div>
  )
}

export default Signup