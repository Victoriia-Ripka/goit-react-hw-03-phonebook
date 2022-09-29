import React, { Component } from "react"

export class Form extends Component {
    state = { //in App
        contacts: [],
        nama: '',
    }

    render(){
        return (
            <form>
                <label htmlFor="">
                    Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                </label>
                <button type="Submit">Add contact</button>
            </form>
        )
    }
}