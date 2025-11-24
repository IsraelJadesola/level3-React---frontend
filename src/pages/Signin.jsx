import React from 'react'
import './signin.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        let userData = {
            email,
            password
        };

        axios.post("https://first-backend-7x60.onrender.com/user/signin", userData)
            .then((res) => {
                console.log("Response", res.data)

                if (res.data.token) {
                    localStorage.setItem("token", res.data.token);
                    console.log("Token stored in localStorage", res.data.token);
                }

                if (res.data.user && !res.data.error) {
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                }


                alert("Sign in successful");
                navigate("/dashboard")
            })
            .catch((err) => {
                console.log("Error", err.response ? err.response.data : err)
                alert("Signup failed")
            })
        console.log(userData)
    }

    return (
        <div className="container">
            <div className="form_area">
                <p className="title">SIGN IN</p>
                <form action="" onSubmit={handleLogin}>
                    <div className="form_group">
                        <label className="sub_title" for="email">Email</label>
                        <input placeholder="Enter your email" id="email" className="form_style" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form_group">
                        <label className="sub_title" for="password">Password</label>
                        <input placeholder="Enter your password" id="password" className="form_style" name='password' type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button className="btns" type="submit">SIGN IN</button>
                        <p>New User? < Link to="/signup">Sign Up Here!</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin