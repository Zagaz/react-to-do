import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [contact,setContact] = useState({
    name: "",
    email: ""
  })
  const [contactList,setContactList] = useState([]);

  
  function defineName(e){
    setContact({...contact,name:e.target.value})
  }
  function defineEmail(e){
    setContact({...contact,email:e.target.value})
  }



  return (
    <>
    <h1>My contact list</h1>
    <hr />
    <div>
      <input type="text" placeholder="John Doe" onChange={defineName} value={contact.name} />
      <br />
      <input type='email' placeholder='jdoe@xpto.com' onChange={defineEmail} value={contact.email} />
      
   
      


    </div>
   

    </>
  )
}

export default App
