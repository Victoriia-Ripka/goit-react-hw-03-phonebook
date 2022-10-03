import React from 'react'
import { Formik, Form, Field } from 'formik'
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types'

export const MyContactForm = ({ onSubmit }) => {
  const initialValues = { name: '', number: '' };

  const handleSubmit = (values, { resetForm }) => {
    const contact = { id: nanoid(), ...values };
    resetForm();

    onSubmit(contact);
  };
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {props => (
        <Form>
          <label>
            Name
            <Field
              type="text"
              // onChange={e => {
              //   console.log(e.currentTarget.value)
              // }} 
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button type="Submit">Add contact</button>
        </Form>
      )}
      {/*value={this.state.name}
      onChange={this.handleChangeInput}*/}
    </Formik>
  );
};
