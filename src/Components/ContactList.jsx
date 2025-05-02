import React from 'react';
import Contact from './Contact';

const ContactList = ({ contactList , remove }) => {
  return (
    <div className='contact-list-wrapper'>
      {contactList.map((contact, index) => (
        <Contact
          key={index}
          index={index}
          name={contact.name}
          email={contact.email}
          remove ={() => remove (contact.email)}
        />
      ))}
    </div>
  );
};

export default ContactList;
