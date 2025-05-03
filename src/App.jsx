import React, { useState, useRef, useEffect } from 'react';
import ContactList from './Components/ContactList';
import './App.css'
import { VscClearAll } from "react-icons/vsc";
import { RiUserAddLine } from "react-icons/ri";
import { LuTriangleAlert } from "react-icons/lu";
import { VscListSelection } from "react-icons/vsc";

import './App.css';

function App() {
  // Holds the current contact being edited or added
  const [contact, setContact] = useState({ name: '', email: '', id: '' });
  const [contactList, setContactList] = useState(() => {
    const saved = localStorage.getItem('contactList');
    return saved ? JSON.parse(saved) : [];
  });

  const inputName = useRef();
  const inputEmail = useRef();

  // Save contact list to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contactList));
  }, [contactList]);

  // Clear all contacts
  function clearStorage() {
    setContactList([]);
  }

  // Handle input changes
  function handleChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  // Add or update contact
  function addContact() {
    if (!contact.name || !contact.email) {
      alert('⚠️ Please fill all fields');
      return;
    }

    if (contact.id) {
      // If contact has an ID, update the existing contact
      const updatedList = contactList.map(c =>
        c.id === contact.id ? { ...contact } : c
      );
      setContactList(updatedList);
    } else {
      // If no ID, it's a new contact
      const duplicity = contactList.find(c => c.email === contact.email);
      if (duplicity) {
        alert('⚠️✉️ This email is already registered.');
        setContact({ ...contact, email: '' });
        inputEmail.current.focus();
        return;
      }

      // Add new contact with generated ID
      const newContact = { ...contact, id: Date.now().toString() };
      setContactList([...contactList, newContact]);
    }

    // Reset form
    setContact({ name: '', email: '', id: '' });
    inputName.current.focus();
  }

  // Handle Enter key to submit
  function handleKeyPress(e) {
    if (e.key === 'Enter') addContact();
  }

  // Load contact into form for editing
  function editByEmail(id) {
    const found = contactList.find(contact => contact.id === id);
    if (found) {
      setContact(found);
      inputName.current.focus();
    }
  }

  // Delete contact by index
  function deleteById(i) {
    setContactList(contactList.filter((_, index) => index !== i));
  }

  return (
    <div>
      {/* Header */}
      <div className='container-fluid title'>
        <div className="row">
          <div className="col text-center">
            <h4 className='text-center'>CONTACT LIST</h4>
          </div>

        </div>
      </div>


      <div className='container-fluid form'>
        <div className="row">
          <div className="col p-3 text-center">
            <div className="row justify-content-center">
              <div className="col-6 ">

                <div className='mb-3'>

                  <label className='form-label'>Name:</label><br />
                  <input
                    className='form-control'
                    name="name"
                    type="text"
                    ref={inputName}
                    value={contact.name}
                    onChange={handleChange}
                  />
                  <br />
                  <label className='form-label'>Email:</label><br />
                  <input
                   className='form-control'
                    name="email"
                    type="text"
                    ref={inputEmail}
                    value={contact.email}
                    onChange={handleChange}
                    onKeyUp={handleKeyPress}
                  />


                </div>

              </div>
            </div>

      

            <div>
              <button onClick={addContact}>
                <RiUserAddLine /> {contact.id ? "Update Contact" : "Add Contact"}
              </button>
              <button onClick={clearStorage}>
                <VscClearAll /> Clear All
              </button>
            </div>

          </div>

        </div>



      </div>

      <div>
        {contactList.length > 0 ? (
          <>
            <h3><VscListSelection /> List:</h3>
            <ContactList
              contactList={contactList}
              remove={deleteById}
              edit={editByEmail}
            />
          </>
        ) : (
          <h3><LuTriangleAlert /> No contacts on the list.</h3>
        )}
      </div>

    </div>
  );
}

export default App;
