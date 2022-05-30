import React, { useContext, useEffect, useRef } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;

  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        type='text'
        ref={text}
        placeholder='Filter Contacts...'
        onChange={handleOnChange}
      />
    </form>
  );
};

export default ContactFilter;
