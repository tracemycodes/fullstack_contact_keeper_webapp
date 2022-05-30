import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Agba Ayoh',
        email: 'Agba@gmail.com',
        phone: '111-444-3334',
        type: 'personal',
      },
      {
        id: 2,
        name: 'John Doe',
        email: 'john.deo@gmail.com',
        phone: '561-744-0734',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Sara Watson',
        email: 'watybaby@gmail.com',
        phone: '611-456-2574',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //Add contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: ADD_CONTACT, payload: id });
  };
  //Set Current Contact

  //Clear current Contact

  //Update Contact

  // Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
