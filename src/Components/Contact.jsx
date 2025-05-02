import React from 'react'

const Contact = ({index, name, email}) => {
   
  return (
    <div className='contact-list-item' key ={index}  >
        {`|name: ${name} | email: ${email}`}
    </div>
  )
}

export default Contact