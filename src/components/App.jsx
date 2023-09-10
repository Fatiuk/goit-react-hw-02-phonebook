import React, { Component } from 'react';
import { nanoid } from 'nanoid';

// ============ Section ============
import Section from './Section/Section';
// ============ Section ============
import PhonebookForm from './PhonebookForm/PhonebookForm';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Section title="📚 Phonebook 📞">
        <PhonebookForm></PhonebookForm>
      </Section>
    );
  }
}
