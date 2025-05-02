import React from 'react'
import Contact from './Contact'

function removeContact(id){
    console.log('id' + id)
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
                            ()  =>  removeContact (idNew)
                            }/>
                        )
                    })
                }

            </div>


        </>
    )
}

export default ContactList