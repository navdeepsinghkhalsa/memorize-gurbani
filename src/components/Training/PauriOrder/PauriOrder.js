import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
// Components
import BaniTitle from '../../BaniTitle';
// Config
import { supportedBanis } from '../../../app/config';
// Utils
import getSections from '../../../utils/getSections';
import splitCorrect from '../../../utils/splitCorrect';

// Actions
import { fetchBaniAction } from '../../../actions/BaniActions';

const styles = {
  option: {
    cursor: 'pointer',
  },
  sectionPaper: {
    padding: '10px',
  },
  section: {
    'line-height': '1.5',
    'margin-bottom': '15px',
  },
};

const PauriOrder = ({
  banis,
  classes,
  fetchBani,
  match,
}) => {
  const baniToken = match.params.bani;
  const { sectionLinesToShow } = supportedBanis[baniToken];
  const bani = banis.find(oneBani => oneBani.token === baniToken);
  const initialState = 0;
  const [correct, setCorrect] = useState(initialState);
  useEffect(() => {
    if (!bani.gurbani) {
      fetchBani(bani.ID);
    }
  });
  useEffect(() => {
    const $correctSections = document.querySelectorAll('[class^="PauriOrder-section"]');
    if ($correctSections.length > 1) {
      const $lastCorrectSection = $correctSections[$correctSections.length - 1];
      requestAnimationFrame(() => window.scrollTo(0, $lastCorrectSection.offsetTop - 5));
    }
  });
  const sections = bani.gurbani ? getSections(bani) : [];
  const { correctArray, nextID, nextOptions } = bani.gurbani ? splitCorrect(sections, correct) : {};

  return (
    <React.Fragment>
      <BaniTitle text={bani.gurmukhi} />
      {bani.gurbani && (
        <div className="gurmukhi">
          <Paper className={[classes.section, classes.sectionPaper].join(' ')}>
            {correctArray.map(sectionID => (
              <div key={`section${sectionID}`} className={classes.section}>
                {sections[sectionID].map((verse, index) => (
                  <React.Fragment key={`line${index}`}>
                    {verse}
                    {' '}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </Paper>
          {correctArray.length <= 3 && (
            <Typography variant="body1" gutterBottom>
              Please choose the next correct Pankti to advance.
            </Typography>
          )}
          <Grid container spacing={24}>
            {nextOptions.map(sectionID => (
              <Grid key={`section${sectionID}`} item xs={12} sm={4}>
                <Paper onClick={() => { if (sectionID === nextID) { setCorrect(nextID); } }} className={[classes.option, classes.sectionPaper].join(' ')}>
                  {sections[sectionID].filter((val, index) => index <= sectionLinesToShow - 1).join(' ')}
                  {' '}
                </Paper>
              </Grid>
            ))}
          </Grid>
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
};

const mapStateToProps = state => ({
  banis: state.banis,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBani: fetchBaniAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PauriOrder));
