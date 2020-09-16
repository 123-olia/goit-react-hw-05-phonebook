import React from "react";
import { CSSTransition } from "react-transition-group";
import trans from "./trans.module.css";
import styles from "./Phonebook.module.scss";

const Title = () => (
  <CSSTransition in={true} appear classNames={trans} timeout={500}>
    <h1 className={styles.title}>Phonebook</h1>
  </CSSTransition>
);

export default Title;
