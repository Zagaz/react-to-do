import React, { useState, useRef, useEffect } from 'react';
import ContactList from './Components/ContactList';
import { VscClearAll } from "react-icons/vsc";
import { RiUserAddLine } from "react-icons/ri";
import { LuTriangleAlert } from "react-icons/lu";
import { VscListSelection } from "react-icons/vsc";
import './App.css';

function App() {
  const [contact, setContact] = useState({ name: '', email: '' });

  const inputName = useRef();
  const inputEmail = useRef();

  // Save in Localstorage

  const [contactList, setContactList] = useState(() => {
    const saved = localStorage.getItem('contactList');
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contactList));
  }, [contactList]);

  function clearStorage(){
    setContactList([]);
  }

  //Inputs

  function handleChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  // Add Contact and validation

  function addContact() {
    if (!contact.name || !contact.email) {
      alert('⚠️ Please fill all fields');
      return;
    }

    const duplicity = contactList.find(c => c.email === contact.email);
    if (duplicity) {
      alert('⚠️✉️ This email is already registered.');
      setContact({ ...contact, email: '' });
      inputEmail.current.focus();
      return;
    }

    setContactList([...contactList, contact]);
    setContact({ name: '', email: '' });
    inputName.current.focus();
  }
// UX optimization
  function handleKeyPress(e) {
    if (e.key === 'Enter') addContact();
  }

  // Remove

  function deleteByEmail(mail){
    console.log(mail)
    setContactList(contactList.filter(c => c.email !== mail));
  }

  function editByEmail(email) {
    const found = contactList.find(contact => contact.email === email);
    if (found) {
      setContact(found);
      inputName.current.focus();
    }
  }


  return (
    <div>
      <h1>My contact list</h1>
      <label>Name:</label><br />
      <input
        name="name"
        type="text"
        ref={inputName}
        value={contact.name}
        onChange={handleChange}
      />
      <br /><br />
      <label>Email:</label><br />
      <input
        name="email"
        type="text"
        ref={inputEmail}
        value={contact.email}
        onChange={handleChange}
        onKeyUp={handleKeyPress}
      />
      <br /><br />

      <div>
      <button onClick={addContact}><RiUserAddLine /> Add Contact</button>
      <button onClick={clearStorage}> <VscClearAll /> Clear All</button>
      </div>
      <div>
        
      {
  contactList.length > 0 ? (
    <>
      <h3> <VscListSelection /> List:</h3>
      <ContactList contactList={contactList} remove = {  deleteByEmail }/>
    </>
  ) : (
    <h3><LuTriangleAlert /> No contacts on the list.</h3>
  )
}


       
      </div>
    </div>
  );
}

export default App;
