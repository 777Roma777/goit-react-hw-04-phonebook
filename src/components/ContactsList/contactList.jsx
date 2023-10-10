import React from 'react';
import css from './contactList.module.css';

export default function ContactsList({ contacts, handleDeleteContact }) {
  return (
    <ul className={css.contactsList}>
      {contacts.map((contact) => (
        <li className={css.contactsItem} key={contact.id}>
          <span className={css.textContact}>
            {contact.name}: {contact.number}
          </span>
          <button
            className={css.button}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}


