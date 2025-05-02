import React from 'react'

const Contact = ({index, id, name, email, remove}) => {
   
  return (
    <div  id = {id} className='contact-list-item' key ={index}  >
        {`|name: ${name} | email: ${email} | EDIT | DELETE`}
        
      <button onClick={remove}>Remove</button>
    </div>
  )
}

export default Contact