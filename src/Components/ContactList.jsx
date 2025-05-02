import React from 'react'
import Contact from './Contact'

function removeContact(){
    console.log('tets')
}

const ContactList = ({ contactList }) => {
 

    return (
        <>
            <div className='contact-list-wrapper'>
                {
                    contactList.map((contact, index) => {
                        let idNew =  'ct-'+ index;
                        return (
                            <Contact key={index} id={idNew} name={contact.name} email={contact.email}  remove = {
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