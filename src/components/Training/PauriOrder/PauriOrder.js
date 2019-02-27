import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Components
import BaniTitle from '../../BaniTitle';
// Utils
import getSections from '../../../utils/getSections';

// Actions
import { fetchBaniAction } from '../../../actions/BaniActions';

const PauriOrder = ({ banis, match, fetchBani }) => {
  const baniToken = match.params.bani;
  const bani = banis.find(oneBani => oneBani.token === baniToken);
  useEffect(() => {
    if (!bani.gurbani) {
      fetchBani(bani.ID);
    }
  });
  const sections = getSections(bani);
  return (
    <React.Fragment>
      <BaniTitle text={bani.gurmukhi} />
      <div className="gurmukhi">
        {Object.keys(sections).map(sectionID => (
          <div key={`section${sectionID}`} style={{ marginBottom: '15px' }}>
            {sections[sectionID].map((verse, index) => (
              <React.Fragment key={`line${index}`}>
                {verse}
                {' '}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
PauriOrder.propTypes = {
  banis: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchBani: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  banis: state.banis,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBani: fetchBaniAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PauriOrder);
