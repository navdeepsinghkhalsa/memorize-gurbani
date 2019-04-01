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
// Config
import { supportedBanis } from '../../../app/config';
// Utils
import getLines from '../../../utils/getLines';
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

const LineOrder = ({
  banis,
  classes,
  fetchBani,
  match,
}) => {
  const baniToken = match.params.bani;
  const bani = banis.find(oneBani => oneBani.token === baniToken);
  const { duplicates } = supportedBanis.lineOrder[baniToken];
  const initialState = 0;
  const [correct, setCorrect] = useState(initialState);
  useEffect(() => {
    if (!bani.gurbani) {
      fetchBani(bani.ID);
    }
  });
  useEffect(() => {
    const $correctLines = document.querySelectorAll('.correctLine');
    if ($correctLines.length > 1) {
      const $lastcorrectLine = $correctLines[$correctLines.length - 1];
      requestAnimationFrame(() => window.scrollTo({ left: 0, top: $lastcorrectLine.offsetTop - 5, behavior: 'smooth' }));
    }
  });
  const lines = bani.gurbani ? getLines(bani) : [];
  const {
    correctArray,
    nextID,
  } = bani.gurbani ? splitCorrect(lines, correct, duplicates) : {};
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
            {correctArray.map(index => (
              <div key={`line${index}`} className="correctLine">
                {lines[index]}
                <br />
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
LineOrder.propTypes = {
  banis: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  classes: PropTypes.shape({}).isRequired,
  fetchBani: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  banis: state.banis,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBani: fetchBaniAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LineOrder));
