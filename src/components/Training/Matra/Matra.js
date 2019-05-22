import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import reactStringReplace from 'react-string-replace';
// Components
import BaniTitle from '../../BaniTitle';

// Actions
import { fetchBaniAction } from '../../../actions/BaniActions';

const highlightVowels = string =>
  reactStringReplace(string, /(H|w|W|y|Y|u|ü|U|¨|i|I|o|O|N|ˆ|M|µ|`|~|¤|´)/g, match => {
    return <i>{match}</i>;
  });

const Matra = ({ banis, fetchBani, match, settings }) => {
  const baniToken = match.params.bani;
  const bani = banis.find(oneBani => oneBani.token === baniToken);
  useEffect(() => {
    if (!bani.gurbani || !bani.schemaVer || bani.schemaVer < settings.schemaVer) {
      fetchBani(bani.ID);
    }
  });
  return (
    <React.Fragment>
      <BaniTitle text={bani.gurmukhi} />
      {bani.gurbani && (
        <div className="matra gurmukhi">
          {bani.gurbani.verses.map(verse => (
            <>{highlightVowels(verse.verse.verse.gurmukhi)} </>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};
Matra.propTypes = {
  banis: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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
)(Matra);
