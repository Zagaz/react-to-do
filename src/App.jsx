import React from 'react'
import { useState } from 'react'
import ButtonSimple from './Components/ButtonSimple.jsx'
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

  function addContact(){
    setContactList([...contactList,contact])
  }

  return (
    <>
    <h1>My contact list</h1>
    <hr />
    <div>
      <div>
        <lable>Name</lable>
      <input type="text" placeholder="John Doe" onChange={defineName} value={contact.name} />
      </div>
      <br />
      <div>
        <label>Email</label>
      <input type='text' placeholder='jdoe@xpto.com' onChange={defineEmail} value={contact.email} />
      </div>
      <ButtonSimple value='Add' onClick={addContact} />
    </div>
    <div>
      <ul>
        {
          contactList.map((contact,index)=>{
            return <li key={index}>{contact.name} - {contact.email}</li>
          })
        
        }

      </ul>

    </div>
   

    </>
  )
}

export default App
