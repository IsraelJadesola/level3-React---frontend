import React from 'react'
import './signin.css'
import { Link } from 'react-router-dom'



const Signin = () => {
  return (
    <div className="container">
        <div className="form_area">
            <p className="title">SIGN IN</p>
            <form action="">
                
                <div className="form_group">
                    <label className="sub_title" for="email">Email</label>
                    <input placeholder="Enter your email" id="email" className="form_style" type="email"/>
                </div>
                <div className="form_group">
                    <label className="sub_title" for="password">Password</label>
                    <input placeholder="Enter your password" id="password" className="form_style" type="password"/>
                </div>
                <div>
                    <button className="btns">SIGN IN</button>
                    <p>New User? < Link to="/signup">Sign Up Here!</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signin