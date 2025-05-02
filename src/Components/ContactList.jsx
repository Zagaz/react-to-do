import React from 'react'
import Contact from './Contact'

const ContactList = ({ contactList }) => {
    return (
        <>
            <ul>
                {
                    contactList.map((contact, index) => {
                        return (
                            <Contact key={index} id= {`contact-${index}`} name={contact.name} email={contact.email} />
                        )
                    })
                }
            </ul>

        </>
    )
}

export default ContactList