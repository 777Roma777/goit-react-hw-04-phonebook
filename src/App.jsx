import { Component } from 'react';
import ContactForm from 'components/ContactsForm/contactForm';
import ContactsList from 'components/ContactsList/contactList';
import Filter from 'components/Filter/filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = (name, number) => {
    const { contacts } = this.state;

    if (name.trim() === '' || number.trim() === '') return;

    const isPresent = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isPresent) {
      alert(`${name} is already in contacts! Please enter a different name`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('Contacts');
    
    if (contacts) {
      const parsedContacts = JSON.parse(contacts);
      this.setState({ contacts: parsedContacts });
    }
  }
  

  componentDidUpdate(_, prevState) {
    // console.log('App componentDidUpdate');

    if (this.state.contacts !== prevState.contacts) {
      // console.log('Обновилось поле');
      localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts, handleInputChange } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div className="container">
        <h1 className="phonebook">Phonebook</h1>
        <ContactForm
          handleInputChange={handleInputChange}
          handleAddContact={this.handleAddContact}
        />
        <h2 className="contacts">Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactsList
          contacts={filteredContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
