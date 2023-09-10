import React, { Component } from 'react';
import {
  ContactForm,
  InputContainer,
  ContactLabel,
  ContactInput,
  AddContactButton,
} from './PhonebookForm.styled';

export default class PhonebookForm extends Component {
  render() {
    return (
      <ContactForm type="submit">
        <InputContainer>
          <ContactLabel htmlFor="name">Name</ContactLabel>
          <ContactInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputContainer>
        <InputContainer>
          <ContactLabel htmlFor="number"> Number</ContactLabel>
          <ContactInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputContainer>
        <AddContactButton type="submit">Add contact</AddContactButton>
      </ContactForm>
    );
  }
}
