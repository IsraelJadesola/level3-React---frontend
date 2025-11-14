import React, { useState } from 'react'
import Card2 from '../components/Card2'

const SignUps = () => {
    const [productName, setProductName] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [productQuantity, setProductQuantity] = useState("")
    const [productImage, setProductImage] = useState("")

    const [allUsers, setAllUsers] = useState([])

    // modal states
    const [showModal, setShowModal] = useState(false)
    const [editIndex, setEditIndex] = useState(null)

    // for editing values
    const [editProductName, setEditProductName] = useState("")
    const [editProductDescription, setEditProductDescription] = useState("")
    const [editProductQuantity, setEditProductQuantity] = useState("")
    const [editProductImage, setEditProductImage] = useState("")

    const submitUser =()=>{
        let userData = {
            productName, productDescription, productQuantity, productImage
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
        setEditProductName(allUsers[index].productName)
        setEditProductDescription(allUsers[index].productDescription)
        setEditProductQuantity(allUsers[index].productQuantity)
        setEditProductImage(allUsers[index].productImage)
        setShowModal(true)
    }

    const saveChanges = () => {
        const updatedUsers = [...allUsers]

        updatedUsers[editIndex] = {
        productName: editProductName,
        productDescription: editProductDescription,
        productQuantity: editProductQuantity,
        productImage: editProductImage
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
            <input type="text" placeholder='Enter your product name' onChange={(e) => {setProductName(e.target.value)}}/> 
            <input type="text" placeholder='Enter your product description' onChange={(e) => {setProductDescription(e.target.value)}}/>
            <input type="productQuantity" placeholder='Enter your productQuantity' onChange={(e) => {setProductQuantity(e.target.value)}}/>
            <input type="productImage" placeholder='Enter your productImage' onChange={(e) => {setProductImage(e.target.value)}}/>

            <button type='button' onClick={submitUser}>Sign Up</button>
        </form>

        <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '1rem 0'}}>
          {
            allUsers.map((user, index) => (
                <div key={index} style={{
                    width: '320px',
                    margin: 0,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)',
                    boxShadow: '0 8px 24px rgba(2,6,23,0.12)',
                    transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                  }}>
                    <div style={{
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.75rem',
                    }}>
                        <Card2 image={user.productImage} title={user.productName} mainTxt={user.productDescription} pQuantity={user.productQuantity}/>
                        <p style={{margin:0, color:'#475569', fontSize:'0.95rem', textAlign:'center'}}></p>
                        <div style={{display:'flex', gap:'0.75rem', marginTop:'0.5rem'}}>
                            <button className='btn btn-warning' onClick={() => editBtn(index)} style={{fontWeight:600, padding:'0.5rem 0.9rem'}}>Edit</button>
                            <button className='btn btn-danger' onClick={() => deleteBtn(index)} style={{fontWeight:600, padding:'0.5rem 0.9rem'}}>Delete</button>
                        </div>
                    </div>
                </div>
            ))
          }
        </div>

        {showModal && (
            <div style={{
                position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
                justifyContent: "center", alignItems: "center"
                }}>
                <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", width: "300px" }}>
                    <h3>Edit User</h3>
                    <input type="text" value={editProductName} onChange={(e) => setEditProductName(e.target.value)} placeholder="product name" />
                    <input type="text" value={editProductDescription} onChange={(e) => setEditProductDescription(e.target.value)} placeholder="product description" />
                    <input type="productQuantity" value={editProductQuantity} onChange={(e) => setEditProductQuantity(e.target.value)} placeholder="productQuantity" />
                    <input type="productImage" value={editProductImage} onChange={(e) => setEditProductImage(e.target.value)} placeholder="productImage" />

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