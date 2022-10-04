import React from 'react';
import PropTypes from 'prop-types';

export const ListOfContacts = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(item => {
        const { name, number, id } = item;
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button value={id} onClick={deleteContact} type="button">
              Delete
            </button>
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
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
