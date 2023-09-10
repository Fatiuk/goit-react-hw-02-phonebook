import React, { Component } from 'react';
// ============ Section ============
import Section from './Section/Section';
// ============ ContactForm ============
import ContactForm from './ContactForm/ContactForm';
// ============ ContactList ============
import Filter from './Filter/Filter';
// ============ ContactList ============
import ContactList from './ContatctList/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Section title="📚 Phonebook 📞">
        <ContactForm onSubmit={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter}></Filter>
        <ContactList contacts={contacts}></ContactList>
      </Section>
    );
  }
}
