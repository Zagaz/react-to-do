import React from 'react';
import Contact from './Contact';

const ContactList = ({ contactList, delete }) => {
  return (
    <div className='contact-list-wrapper'>
      {contactList.map((contact, index) => (
        <Contact
          key={index}
          index={index}
          name={contact.name}
          email={contact.email}
          remove={() => delete(contact.email)}
        />
      ))}
    </div>
  );
};

export default ContactList;
