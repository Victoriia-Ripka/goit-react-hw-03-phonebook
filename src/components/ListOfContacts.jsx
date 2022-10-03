import React from 'react';
import PropTypes from 'prop-types';

export const ListOfContacts = ({ contacts, onDeleteBtn }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { name, id } = contact;
        return (
          <li key={id}>
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

ListOfContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
