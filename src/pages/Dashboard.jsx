import React from 'react'
import Btn from '../components/Btn'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()


  const logout = ((e) => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/signin")
  })

  return (
    <>
      <div>I am the Dashboard</div>
      {<Btn title="Logout" color="btn btn-danger text-white" onClick={logout} />}

    </>
  )
}

export default Dashboard