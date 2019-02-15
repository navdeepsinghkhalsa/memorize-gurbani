import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Configuration
import { supportedBanis } from '../../../app/config';

// Components
import BaniName from './BaniName/BaniName';

// Actions
import { fetchBanisListAction } from './BaniListActions';

// Styles
import styles from './BaniList.css';

const BaniList = ({
  banis,
  fetchBanisList,
}) => {
  useEffect(() => {
    if (banis.length < 1) {
      fetchBanisList();
    }
  });
  return (
    <div className={`${styles.banis} gurmukhi`}>
      {banis.map(bani => supportedBanis[bani.token] && <BaniName key={bani.token} bani={bani} />)}
    </div>
  );
};
BaniList.propTypes = {
  banis: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchBanisList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  banis: state.banis,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBanisList: fetchBanisListAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BaniList);
