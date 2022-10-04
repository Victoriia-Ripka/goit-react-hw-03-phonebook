import React, { Component } from 'react';
import { MyContactForm } from './Form';
import { Section } from './Section';
import { ListOfContacts } from './ListOfContacts';
import { Filter } from './Filter';
// import PropTypes from 'prop-types'

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  hanlerSubmitForm = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  filterContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalFilter = this.state.filter.toLowerCase()
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    );
    return (
      <>
        <Section title="Phonebook">
          <MyContactForm onSubmit={this.hanlerSubmitForm} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.filterContacts} />
          <ListOfContacts contacts={visibleContacts} />
        </Section>
      </>
    );
  }
}
