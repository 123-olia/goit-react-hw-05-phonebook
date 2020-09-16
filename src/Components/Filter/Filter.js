import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.scss";

let Filter = ({ handleChangeFilter, filter }) => {
  return (
    <section className={styles.section}>
      <label className={styles.label}>
        Find contacts by name:
        <br />
        <input
          onChange={handleChangeFilter}
          value={filter}
          name="filter"
          type="text"
          className={styles.input}
        />
      </label>
    </section>
  );
};

export default Filter;

Filter.propTypes = {
  handleChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};
