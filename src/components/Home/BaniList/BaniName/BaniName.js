import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styles
import styles from './BaniName.css';

const BaniName = ({ bani }) => (
  <Link to={`/pauri-order/${bani.token}`} className={styles.baniName}>
    {bani.gurmukhi}
  </Link>
);
BaniName.propTypes = {
  bani: PropTypes.shape({}).isRequired,
};

export default BaniName;
