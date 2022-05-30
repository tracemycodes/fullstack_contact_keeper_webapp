import React, { useContext, useState } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;

  const handleOnChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    contactContext.addContact(contact);
    // setContact({
    //   name: '',
    //   email: '',
    //   phone: '',
    //   type: 'personal',
    // });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h2 className='text-primary'>Add Contact</h2>
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={name}
        onChange={handleOnChange}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={email}
        onChange={handleOnChange}
      />
      <input
        type='text'
        name='phone'
        placeholder='Phone Number'
        value={phone}
        onChange={handleOnChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
      />{' '}
      Professional
      <div>
        <input
          type='submit'
          value='Add Contact'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default ContactForm;
