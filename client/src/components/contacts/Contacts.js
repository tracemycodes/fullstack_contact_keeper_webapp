import React, { useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactsItem from './ContactsItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext)

  const { contacts } = contactContext;

  return (
    <>
      {contacts.map(contact => <ContactsItem key={contact.id} contact={contact}/>)} 
    </>
  )
}

export default Contacts
