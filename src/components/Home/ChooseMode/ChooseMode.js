import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
// Actions
import { updateTestingModeAction } from '../../../actions/SettingsActions';
// Styles
import styles from './ChooseMode.css';

const ChooseMode = ({ testingMode, updateTestingMode }) => (
  <Typography className={styles.chooseMode} variant="body2">
    Training Mode
    <Switch onChange={e => updateTestingMode(e.target.checked)} checked={testingMode} />
    Testing Mode
  </Typography>
);
ChooseMode.propTypes = {
  testingMode: PropTypes.bool.isRequired,
  updateTestingMode: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateTestingMode: updateTestingModeAction,
    },
    dispatch,
  );

const mapStateToProps = state => ({
  testingMode: state.testingMode,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseMode);
