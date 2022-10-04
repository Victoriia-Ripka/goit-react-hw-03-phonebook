import React from 'react';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'

export const MyContactForm = ({ onSubmit }) => {
  const initialValues = { name: '', number: '' };

  const handleSubmit = (values, { resetForm }) => {
    const contact = { id: nanoid(), ...values };
    resetForm();
    onSubmit(contact);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {props => (
        <Form>
          <label>
            Name
            <Field
              type="text"
              value={props.values.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br />
          <label>
            Number
            <Field
              type="tel"
              value={props.values.number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <button type="Submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

MyContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}