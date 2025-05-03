import React from 'react';
import './Contact.css'

const Contact = ({ index, id, name, email, remove , edit}) => {
  return (
    <div  id={id} className='contact-list-item' key={index}>
      {`| name: ${name} | email: ${email}`}
      <button onClick={edit}>Edit</button>
      <button onClick={remove}>Delete</button>
    </div>
  );
};

export default Contact;
