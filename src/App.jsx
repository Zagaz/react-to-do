import React, { useState, useRef, useEffect } from 'react';
import ContactList from './Components/ContactList';
import './App.css';
import { VscClearAll, VscListSelection } from "react-icons/vsc";
import { RiUserAddLine, RiContactsBook3Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { LuTriangleAlert } from "react-icons/lu";

function App() {
  const [contact, setContact] = useState({ name: '', email: '', id: '' });
  const [contactList, setContactList] = useState(() => {
    const saved = localStorage.getItem('contactList');
    return saved ? JSON.parse(saved) : [];
  });

  const inputName = useRef();
  const inputEmail = useRef();

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contactList));
  }, [contactList]);

  function clearStorage() {
    setContactList([]);
  }

  function handleChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  function addContact() {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!contact.name || !contact.email) {
      alert('⚠️ Please fill all fields');
      return;
    }

    if (!nameRegex.test(contact.name)) {
      alert('⚠️ Name must contain letters only');
      inputName.current.focus();
      return;
    }

    if (!emailRegex.test(contact.email)) {
      alert('⚠️ Invalid email format');
      inputEmail.current.focus();
      return;
    }

    const formattedName = contact.name
      .toLowerCase()
      .replace(/\b\w/g, l => l.toUpperCase());
    const formattedEmail = contact.email.toLowerCase();

    const newContactData = {
      ...contact,
      name: formattedName,
      email: formattedEmail
    };

    if (contact.id) {
      const updatedList = contactList.map(c =>
        c.id === contact.id ? { ...newContactData } : c
      );
      setContactList(updatedList);
    } else {
      const duplicity = contactList.find(c => c.email === formattedEmail);
      if (duplicity) {
        alert('⚠️✉️ This email is already registered.');
        setContact({ ...contact, email: '' });
        inputEmail.current.focus();
        return;
      }

      const newContact = {
        ...newContactData,
        id: Date.now().toString()
      };
      setContactList([...contactList, newContact]);
    }

    setContact({ name: '', email: '', id: '' });
    inputName.current.focus();
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') addContact();
  }

  function editByEmail(id) {
    const found = contactList.find(contact => contact.id === id);
    if (found) {
      setContact(found);
      inputName.current.focus();
    }
  }

  function deleteById(i) {
    setContactList(contactList.filter((_, index) => index !== i));
  }

  return (
    <div>
      <div className='container-fluid title'>
        <div className="row">
          <div className="col text-center">
            <h4 className='text-center'><RiContactsBook3Line /> CONTACT LIST</h4>
          </div>
        </div>
      </div>

      <div className='container-fluid form'>
        <div className="row">
          <div className="col p-3 text-center">
            <div className="row justify-content-center">
              <div className="col-10 col-sm-8 col-md-6 col-lg-4">
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
                  <div className='row mt-4'>
                    <div className="col text-start">
                      <button className='btn btn-outline-warning' onClick={clearStorage}>
                        <VscClearAll /> Clear All
                      </button>
                    </div>
                    <div className="col text-end">
                      <button className='btn btn-outline-info' onClick={addContact}>
                        {contact.id ? (
                          <>
                            <GrUpdate /> Update
                          </>
                        ) : (
                          <>
                            <RiUserAddLine /> Add
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
