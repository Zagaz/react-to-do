import React from 'react'
import Contact from './Contact'

const ContactList = ({ contactList }) => {
    return (
        <>
            <div className='contact-list-wrapper'>
                {
                    contactList.map((contact, index) => {
                        return (
                            <Contact key={index} id={`contact-${index}`} name={contact.name} email={contact.email} />
                        )
                    })
                }

            </div>


        </>
    )
}

export default ContactList