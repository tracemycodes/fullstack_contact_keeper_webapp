import React from 'react';

const ContactsItem = ({ contact }) => {
  const { name, email, id, phone, type } = contact;

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span style={{float: 'right'}}
          className={
            'badge' + 
            (type === 'professional' ? ' badge-success' : ' badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (<li>
          <i className="fas fa-envelope-open">{email}</i>
        </li>)}
        {phone && (<li>
          <i className="fas fa-phone">{phone}</i>
        </li>)}
      </ul>
      <p>
        <button className="btn-dark btn btn-sm">Edit</button>
        <button className="btn-danger btn btn-sm">Delete</button>
      </p>
    </div>
  );
};

export default ContactsItem;
