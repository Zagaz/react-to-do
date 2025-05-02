import React from 'react'
import Contact from './Contact'

function removeContact(){
    console.log('tets')
}

const ContactList = ({ contactList }) => {
    let idContact= Math.random();

    return (
        <>
            <div className='contact-list-wrapper'>
                {
                    contactList.map((contact, index) => {
                        return (
                            <Contact key={index} id={idContact} name={contact.name} email={contact.email}  remove = {
                                removeContact 
                            }/>
                        )
                    })
                }

            </div>


        </>
    )
}

export default ContactList