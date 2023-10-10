import React from 'react';
import css from './contactForm.module.css';
import { useState } from 'react';

const ContactForm = ({ handleAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact(name, number);
    setName('');
    setNumber('');
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <p className={css.descriptionInput}>Name</p>
        <input
          onChange={handleInputChange}
          value={name}
          type="text"
          name="name"
          required
        />
      </label>
      <label className={css.label}>
        <p className={css.descriptionInput}>Number</p>
        <input
          onChange={handleInputChange}
          value={number}
          type="tel"
          name="number"
          required
        ></input>
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
