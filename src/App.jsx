import React from 'react'
import { useState , useRef } from 'react'
import ContactList from './Components/ContactList'
import Contact from './Components/Contact'
import { FiAlertTriangle } from "react-icons/fi";

import './App.css'

function App() {
  const [contact, setContact] = useState({
    name: "",
    email: ""
  })
  const [contactList, setContactList] = useState([]);
  const inputName = useRef()
  const inputEmail = useRef()

  


  function defineName(e) {

    setContact({ ...contact, name: e.target.value })
  }
  function defineEmail(e) {
    setContact({ ...contact, email: e.target.value })
  }

  function addContact() {
    // Validations
    if (contact.name === "" || contact.email === "") {
      alert(`⚠️ Please fill all fields`)
      return
    }
    // Find
    let duplicity = contactList.find(
      (ct)=> ct.email === contact.email && ct.name === contact.name
    )
    if (typeof duplicity !== 'undefined') {
      alert(`⚠️✉️ This email is already registered, please use another one.`)
      inputEmail.current.value =''
      inputEmail.current.focus()
      return

    }

    setContactList([...contactList, contact])
    setContact({ name: "", email: "" })
    inputName.current.focus()
    
  }

  return (
    <>
      <h1>My contact list</h1>
      <hr />
      <div>
        <div>
          <label>Name</label> <br />
          <input ref={inputName} type="text" placeholder="John Doe" onChange={defineName} value={contact.name} />
        </div>
        <br />
        <div>
          <br />
          <label>Email</label>
          <input ref={inputEmail} type='text' placeholder='jdoe@xpto.com' onChange={defineEmail} value={contact.email} />
        </div>
        <button onClick={addContact}>Add</button>
        <hr />


      </div>
      <div>
        {
          <ContactList contactList={contactList} />
        }
      </div>
    </>
  )
}

export default App
