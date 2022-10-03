import React, { Component } from 'react';
import { Forma } from './Form';
import { Section } from './Section';
import { ListOfContacts } from "./ListOfContacts";

export class App extends Component {
  state = {
    contacts: [1, 2, 3],
    name: '',
  };

  hanlerSubmitForm = data => {
    this.setState(prevState => {
      contactSpread = ...this.state.contacts
      // this.setState({contacts: contactSpread, data.name})
      // console.log(data.name)
      console.log(...this.state.contacts);
    });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Forma onSubmit={this.hanlerSubmitForm} value={this.state.name} />
        </Section>
        <Section title="Contacts">
          {/* <ListOfContacts contacts={this.state.contacts}/> */}
        </Section>
      </>
    );
  }
}
