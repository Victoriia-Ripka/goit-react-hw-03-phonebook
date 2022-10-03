import React, { Component } from 'react'
import { MyContactForm } from './Form'
import { Section } from './Section'
import { ListOfContacts } from "./ListOfContacts";

export class App extends Component {
  state = {
    contacts: [
      { name: 'a', id: 1 },
      { name: 'b', id: 2 },
    ],
    name: '',
  };

  hanlerSubmitForm = e => {
    e.preventDefault()
    this.setState(prevState => ({
      contacts: [{name: 'c', id: 1}, ...prevState.contacts],
    }))
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <MyContactForm
            onSubmit={this.hanlerSubmitForm}
          />
        </Section>
        <Section title="Contacts">
          <ListOfContacts contacts={this.state.contacts}/>
        </Section>
      </>
    );
  }
}
