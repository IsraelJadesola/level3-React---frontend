import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './signup.css'
import axios from 'axios'



const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();

    let userData = { firstName, lastName, email, password }

    axios.post("https://first-backend-7x60.onrender.com/user/signup", userData)
      .then((res) => {
        console.log("Response:", res.data)
        alert("signup successful! Please login");
        navigate("/signin")
      })
      .catch((err) => {
        console.log("Error:", err.response ? err.response.data : err);
        alert("Signup failed")
      })
    // console.log(userData)
  }

  return (
    <div className="container">
      <div className="form_area">
        <p className="title">SIGN UP</p>
        <form action="" onSubmit={handleSubmit}>
          <div className="form_group">
            <label className="sub_title" for="name">First Name</label>
            <input name="firstName" placeholder="Enter your first name" className="form_style" type="text" onChange={(e) => { setFirstName(e.target.value) }} />
          </div>
          <div className="form_group">
            <label className="sub_title" for="name">Last Name</label>
            <input name="lastName" placeholder="Enter your last name" className="form_style" type="text" onChange={(e) => { setLastName(e.target.value) }} />
          </div>
          <div className="form_group">
            <label className="sub_title" for="email">Email</label>
            <input name='email' placeholder="Enter your email" id="email" className="form_style" type="email" onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className="form_group">
            <label className="sub_title" for="password">Password</label>
            <input name='password' placeholder="Enter your password" id="password" className="form_style" type="password" onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div>
            <button className="btns" type='submit'> SIGN UP</button>

            <p>Have an Account? < Link to="/signin">Login Here!</Link></p>
          </div>
        </form>
      </div>
    </div>
  )

}
export default Signup