import React from 'react'
import Btn from '../components/Btn'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'

const Dashboard = () => {
  let count = useSelector((state) => state.counterReducer.counter)
  let dispatch = useDispatch()

  const navigate = useNavigate()

  const logout = ((e) => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/signin")
  })

  return (

    <>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <div>I am the Dashboard</div>
      {<Btn title="Logout" color="btn btn-danger text-white" onClick={logout} />}

    </>
  )
}

export default Dashboard