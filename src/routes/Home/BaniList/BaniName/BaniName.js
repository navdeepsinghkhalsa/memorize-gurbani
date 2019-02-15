import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './BaniName.css';

const BaniName = ({ bani }) => (
  <a href={bani.token} className={styles.baniName}>
    {bani.gurmukhi}
  </a>
);
BaniName.propTypes = {
  bani: PropTypes.shape({}).isRequired,
};

export default BaniName;
