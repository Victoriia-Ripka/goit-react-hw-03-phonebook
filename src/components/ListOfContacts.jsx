import React from 'react';

// import PropTypes from "prop-types"

export const ListOfContacts = (props) => {
  console.log(this.props);
  return (
    <ul>
      {props.map(contact => {
        return (
          <li >
            <p>{contact}</p>
          </li>
        );
      })}
    </ul>
  );
};
