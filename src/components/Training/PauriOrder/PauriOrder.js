import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Components
import BaniTitle from '../../BaniTitle';

// Actions
import { fetchBaniAction } from '../../../actions/BaniActions';

const PauriOrder = ({ banis, match }) => {
  const baniToken = match.params.bani;
  const bani = banis.find(oneBani => oneBani.token === baniToken);
  return (
    <React.Fragment>
      <BaniTitle text={bani.gurmukhi} />
      Hello,
      {bani.gurmukhiUni}
    </React.Fragment>
  );
};
PauriOrder.propTypes = {
  banis: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  match: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  banis: state.banis,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBani: fetchBaniAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PauriOrder);
