import React from 'react'
import { useState } from 'react'
import ButtonSimple from './Components/ButtonSimple.jsx'
import './App.css'

function App() {
  const [contact, setContact] = useState({
    name: "",
    email: ""
  })
  const [contactList, setContactList] = useState([]);


  function defineName(e) {
    setContact({ ...contact, name: e.target.value })
  }
  function defineEmail(e) {
    setContact({ ...contact, email: e.target.value })
  }

  function addContact() {
    setContactList([...contactList, contact])

    console.table(contact)
  }

  return (
    <>
      <h1>My contact list</h1>
      <hr />
      <div>
        <div>
          <label>Name</label> <br />
          <input type="text" placeholder="John Doe" onChange={defineName} value={contact.name} />
        </div>
        <br />
        <div>
          <br />
          <label>Email</label>
          <input type='text' placeholder='jdoe@xpto.com' onChange={defineEmail} value={contact.email} />
        </div>
        <button onClick={addContact}>Add</button>

      </div>
      <div>
        {/* List */}
   

      </div>


    </>
  )
}

export default App
