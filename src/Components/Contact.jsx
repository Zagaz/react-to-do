import React from 'react';

const Contact = ({ index, id, name, email, delete }) => {
  return (
    <div id={id} className='contact-list-item' key={index}>
      {`| name: ${name} | email: ${email} | EDIT | DELETE `}
      <button onClick={delete}>Remove</button>
    </div>
  );
};

export default Contact;
