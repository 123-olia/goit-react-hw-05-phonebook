import React, { Component } from "react";
import styles from "./ContactForm.module.scss";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact(this.state.name, this.state.number);

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.contactForm} onSubmit={this.handleSubmit}>
        <label>
          Name
          <br />
          <input
            className={styles.input}
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
            required
          />
        </label>
        <br />
        <label>
          Number
          <br />
          <input
            className={styles.input}
            type="tel"
            value={number}
            name="number"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button className={styles.addBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
