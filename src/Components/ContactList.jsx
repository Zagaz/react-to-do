import React from 'react';
import Contact from './Contact';
import './ContactList.css'


const ContactList = ({ contactList , remove , edit }) => {
   
     

  return (
    <div className='contact-list-wrapper'>
      {contactList.map((contact, index) => (
        <Contact
          key={index}
          id = {index}
          index={index}
          name={contact.name}
          email={contact.email}
          remove ={() => remove (index)}
          edit ={() => edit (contact.id)}
        />
      ))}
    </div>
  );
};

export default ContactList;
