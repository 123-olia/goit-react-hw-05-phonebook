import React from "react";
import styles from "./Notification.module.scss";

const Notification = ({ isAlready }) => {
  setTimeout(isAlready, 3000);
  return <p className={styles.notify}>Contact already exists!</p>;
};

export default Notification;
