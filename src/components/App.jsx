import React, { Component } from 'react';
import { MyContactForm } from './Form';
import { Section } from './Section';
import { ListOfContacts } from './ListOfContacts';
// import PropTypes from 'prop-types'

export class App extends Component {
  state = {
    contacts: [
      { name: 'Beatta Tyl', number:'745-17-79', id: "VNArCJnzu-28LQkkdMUhd" },
      { name: 'Anne Brown', number:'443-89-12', id: "VNArCJnku-28LQktdMUhd" },
    ],
    filter: '',
    name: '',
    number: '',
  };

  hanlerSubmitForm = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <MyContactForm onSubmit={this.hanlerSubmitForm} />
        </Section>
        <Section title="Contacts">
          <ListOfContacts contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}
