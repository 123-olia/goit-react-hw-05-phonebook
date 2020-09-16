import React, { Component } from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";
import Title from "./Components/Title/Phonebook";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import Notification from "./Components/Notification/Notification";
import notifyTransitions from "./transition.module.scss";

import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    notification: false,
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");
    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  componentWillUnmount() {}

  addContact = (name, number) => {
    if (this.state.contacts.find((contact) => name === contact.name)) {
      return this.setState({ notification: true });
    }

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
        notification: false,
      };
    });
  };

  // isAlready = ()=>{
  //   this.setState({notification:false})
  // }

  handleChangeFilter = (event) => {
    event.persist();
    this.setState(() => {
      return { filter: event.target.value };
    });
  };

  filteredContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (contactId) => {
    this.setState(() => {
      return {
        contacts: this.state.contacts.filter(
          (contact) => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const { filter, notification, contacts } = this.state;

    return (
      <div>
        <Title />

        <CSSTransition
          in={notification}
          classNames={notifyTransitions}
          timeout={250}
          unmountOnExit
        >
          <Notification isAlready={this.isAlready} />
        </CSSTransition>

        <ContactForm onAddContact={this.addContact} />

        {contacts.length > 1 && (
          <Filter
            handleChangeFilter={this.handleChangeFilter}
            filter={filter}
          />
        )}
        <ContactList
          contacts={this.filteredContact()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
