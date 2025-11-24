import React from 'react'
import Btn from '../components/Btn'

const Dashboard = () => {

  const logout = ((e) => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  })

  return (
    <>
      <div>I am the Dashboard</div>
      <Btn title="Logout" color="btn btn-danger text-white" onClick={logout} />

    </>
  )
}

export default Dashboard