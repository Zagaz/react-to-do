import React from 'react'

const ContactList = ({contactList}) => {
  return (
    <>
    <ul>
    {
        
        contactList.map((contact,index)=>{
            return(
                <li key={index} id={`contact-${index+1}`}>
                    {contact.name}
                </li>
            )
        })
        
    }
    </ul>

    </>
  )
}

export default ContactList