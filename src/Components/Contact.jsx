import React from 'react'

const Contact = ({key, name, email}) => {
   
  return (
    <li key ={key} >
        {`name: ${name} | email: ${email}`}
    </li>
  )
}

export default Contact