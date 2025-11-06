import React, { useState } from 'react'

const SignUps = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [allUsers, setAllUsers] = useState([])

    // modal states
    const [showModal, setShowModal] = useState(false)
    const [editIndex, setEditIndex] = useState(null)

    // for editing values
    const [editFirstName, setEditFirstName] = useState("")
    const [editLastName, setEditLastName] = useState("")
    const [editEmail, setEditEmail] = useState("")
    const [editPassword, setEditPassword] = useState("")

    const submitUser =()=>{
        let userData = {
            firstName, lastName, email, password
        }

        let newAllUsers = [...allUsers, userData]
        setAllUsers(newAllUsers)
        console.log(newAllUsers)
    }
    
    const deleteBtn =(index) =>{
        const updatedUsers = [...allUsers]
        
        updatedUsers.splice(index, 1)

        setAllUsers(updatedUsers)
        console.log("delete is working", index)
    }

    const editBtn =(index)=>{
        // open modal and load data into inputs
        setEditIndex(index)
        setEditFirstName(allUsers[index].firstName)
        setEditLastName(allUsers[index].lastName)
        setEditEmail(allUsers[index].email)
        setEditPassword(allUsers[index].password)
        setShowModal(true)
    }

    const saveChanges = () => {
        const updatedUsers = [...allUsers]

        updatedUsers[editIndex] = {
        firstName: editFirstName,
        lastName: editLastName,
        email: editEmail,
        password: editPassword
        }
        
        setAllUsers(updatedUsers)
        setShowModal(false)
    }

    const cancelEdit = () => {
        setShowModal(false)
    }

    return (
    <>
        <form>
            <h1>Sign Up</h1>
            <input type="text" placeholder='Enter your first name' onChange={(e) => {setFirstName(e.target.value)}}/> 
            <input type="text" placeholder='Enter your last name' onChange={(e) => {setLastName(e.target.value)}}/>
            <input type="email" placeholder='Enter your email' onChange={(e) => {setEmail(e.target.value)}}/>
            <input type="password" placeholder='Enter your password' onChange={(e) => {setPassword(e.target.value)}}/>

            <button type='button' onClick={submitUser}>Sign Up</button>
        </form>

        {
            allUsers.map((user, index) => (
                <div key={index} className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{user.firstName}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{user.lastName}</h6>
                        <p className="card-text">{user.email}</p>                            
                        <p className="card-text">{user.password}</p>
                        <button className='btn btn-warning me-3' onClick={() => editBtn(index)}>Edit</button>
                        <button className='btn btn-danger' onClick={() => deleteBtn(index)}>Delete</button>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            ))
        }

        {showModal && (
            <div style={{
                position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
                justifyContent: "center", alignItems: "center"
                }}>
                <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", width: "300px" }}>
                    <h3>Edit User</h3>
                    <input type="text" value={editFirstName} onChange={(e) => setEditFirstName(e.target.value)} placeholder="First name" />
                    <input type="text" value={editLastName} onChange={(e) => setEditLastName(e.target.value)} placeholder="Last name" />
                    <input type="email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} placeholder="Email" />
                    <input type="password" value={editPassword} onChange={(e) => setEditPassword(e.target.value)} placeholder="Password" />

                    <div style={{ marginTop: "10px" }}>
                    <button className="btn btn-success me-2" onClick={saveChanges}>Save Changes</button>
                    <button className="btn btn-secondary" onClick={cancelEdit}>Cancel</button>
                    </div>
                </div>
            </div>
        )}
    </>
    )
}

export default SignUps