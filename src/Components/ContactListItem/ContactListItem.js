import React from "react";
import styles from "./ContactListItem.module.scss";
import PropTypes from "prop-types";

const ContactListItem = ({ el, delCont }) => (
  <li className={styles.listItem}>
    {el.name}: {el.number}
    <button className={styles.btn} onClick={delCont}>
      Delete
    </button>
  </li>
);

export default ContactListItem;

ContactListItem.propTypes = {
  el: PropTypes.object.isRequired,
  delCont: PropTypes.func,
};
