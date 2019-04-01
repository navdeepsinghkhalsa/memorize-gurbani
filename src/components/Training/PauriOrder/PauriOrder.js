import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
// Components
import BaniTitle from '../../BaniTitle';
// Utils
import getSections from '../../../utils/getSections';
import splitCorrect from '../../../utils/splitCorrect';

// Actions
import { fetchBaniAction } from '../../../actions/BaniActions';

const styles = {
  fab: {
    bottom: '75px',
    position: 'fixed !important',
    right: '5%',
  },
  sectionPaper: {
    'margin-bottom': '15px',
    padding: '10px',
  },
  section: {
    'line-height': '1.5',
    'margin-bottom': '15px',
  },
  withNextButton: {
    'margin-bottom': '75px',
  },
};

const PauriOrder = ({ banis, classes, fetchBani, match, settings }) => {
  const baniToken = match.params.bani;
  const bani = banis.find(oneBani => oneBani.token === baniToken);
  const initialState = 0;
  const [correct, setCorrect] = useState(initialState);
  useEffect(() => {
    if (!bani.gurbani || !bani.schemaVer || bani.schemaVer < settings.schemaVer) {
      fetchBani(bani.ID);
    }
  });
  useEffect(() => {
    const $correctSections = document.querySelectorAll('.correctSection');
    if ($correctSections.length > 1) {
      const $lastCorrectSection = $correctSections[$correctSections.length - 1];
      requestAnimationFrame(() =>
        window.scrollTo({
          left: 0,
          top: $lastCorrectSection.offsetTop - 5,
          behavior: 'smooth',
        }),
      );
    }
  });
  const sections = bani.gurbani ? getSections(bani, bani.length || settings.baniLength) : [];
  const { correctArray, nextID } = bani.gurbani ? splitCorrect(sections, correct) : {};
  const paperClasses = [classes.sectionPaper];
  if (correctArray && correctArray.length > 1 && nextID) {
    paperClasses.push(classes.withNextButton);
  }

  return (
    <React.Fragment>
      <BaniTitle text={bani.gurmukhi} />
      {bani.gurbani && (
        <div className="gurmukhi">
          <Paper className={paperClasses.join(' ')}>
            {correctArray.map(sectionID => (
              <div key={`section${sectionID}`} className={`correctSection ${classes.section}`}>
                {sections[sectionID].map((verse, index) => (
                  <React.Fragment key={`line${index}`}>{verse} </React.Fragment>
                ))}
              </div>
            ))}
          </Paper>
          {correctArray.length <= 1 && (
            <Typography variant="body1" gutterBottom>
              Please click the Next Pauri button to advance.
            </Typography>
          )}
          {nextID && (
            <Fab className={classes.fab} onClick={() => setCorrect(nextID)}>
              <KeyboardArrowRightIcon />
            </Fab>
          )}
        </div>
      )}
    </React.Fragment>
  );
};
PauriOrder.propTypes = {
  banis: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  classes: PropTypes.shape({}).isRequired,
  fetchBani: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
  settings: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  banis: state.banis,
  settings: state.settings,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchBani: fetchBaniAction,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(PauriOrder));
