import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
};

export class Forma extends Component {
  static propTypes = {
    value: PropTypes.string,
    onSubmit: PropTypes.func,
  };

  state = {
    name: '',
    id: '',
  };

  // update of state
  handleChangeInput = e => {
    this.setState({ name: e.target.value });
  };

  // submit form
  handleSubmit = e => {
    e.preventDefault();
    // this.setState({id: {nanoid()}})
    this.props.onSubmit({ ...this.state });
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="contact"
            value={this.state.name}
            onChange={this.handleChangeInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="Submit">Add contact</button>
      </form>
    );
  }
}
