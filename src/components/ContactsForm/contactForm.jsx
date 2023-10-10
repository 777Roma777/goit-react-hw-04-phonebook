import React, { Component } from 'react';
import css from './contactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;

    this.props.handleAddContact(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const {
      state: { name, number },
      handleInputChange,
    } = this;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
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
  }
}
