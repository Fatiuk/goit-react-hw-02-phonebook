import {
  ContactListWrap,
  PhonebookList,
  PhonebookItem,
  ContactSpan,
  ContactLink,
} from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <ContactListWrap>
      <PhonebookList>
        {contacts.map(({ id, name, number }) => (
          <PhonebookItem key={id}>
            <ContactSpan>{name}</ContactSpan>:{' '}
            <ContactLink href={`tel:${number}`}>{number}</ContactLink>
          </PhonebookItem>
        ))}
      </PhonebookList>
    </ContactListWrap>
  );
};

export default ContactList;
