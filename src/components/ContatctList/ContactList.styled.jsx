import styled from 'styled-components';

export const ContactListWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const PhonebookList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  list-style: none;
`;
export const PhonebookItem = styled.li`
  letter-spacing: 2px;
`;
export const ContactSpan = styled.span`
  font-weight: 500;
`;
export const ContactLink = styled.a`
  color: #464748;
  text-decoration: none;
  border-bottom: solid 1px transparent;
  transition: all 0.3s;
  &:hover {
    color: #3994c8;
    border-color: #464748;
  }
`;
