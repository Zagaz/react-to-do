import React from 'react'

const Contact = ({index, name, email}) => {
   
  return (
    <li key ={index}  >
        {`|name: ${name} | email: ${email}`}
    </li>
  )
}

export default Contact