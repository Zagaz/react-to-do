import React from 'react'

const Contact = ({index, name, email, remove}) => {
   
  return (
    <div  className='contact-list-item' key ={index}  >
        {`|name: ${name} | email: ${email} | EDIT | DELETE`}
        
      <button onClick={remove}>Remove</button>
    </div>
  )
}

export default Contact