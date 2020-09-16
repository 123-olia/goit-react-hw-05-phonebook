import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import trans from "./Transitions.module.css";
import styles from "./ContactList.module.scss";

const ContactList = ({ contacts, deleteContact }) => (
  <section>
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map((contact) => (
        <CSSTransition
          key={contact.id}
          timeout={250}
          classNames={trans}
          className={styles.listItem}
        >
          <ContactListItem
            key={contact.id}
            el={contact}
            delCont={() => deleteContact(contact.id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </section>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
