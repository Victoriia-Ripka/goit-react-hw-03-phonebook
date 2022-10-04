import React from 'react';
import PropTypes from 'prop-types';

export const ListOfContacts = ({ contacts, onDeleteBtn }) => {
  return (
    <ul>
      {contacts.map(item => {
        const { name, number, id } = item;
        return (
          <li key={id}>
            <p>{name}: {number}</p>
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
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
