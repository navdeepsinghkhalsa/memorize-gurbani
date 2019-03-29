import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { supportedBanis, lengths } from '../../../../app/config';

// Actions
import { updateBaniLengthPrefAction } from '../../../../actions/BaniActions';

// Styles
import styles from './BaniName.css';

const BaniName = ({
  bani,
  settings,
  testingMode,
  updateBaniLengthPref,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const supportedLengths = lengths[bani.token];
  const path = testingMode ? 'testing' : 'training';

  const handleLengthClick = (length) => {
    updateBaniLengthPref(bani.ID, length);
    setAnchorEl(null);
  };

  const action = supportedLengths ? (
    <IconButton
      onClick={e => setAnchorEl(e.currentTarget)}
    >
      <MoreVertIcon />
    </IconButton>
  ) : null;

  const lengthPref = bani.length || settings.baniLength;

  return (
    <Card className={styles.baniName}>
      <CardHeader
        action={action}
        title={bani.gurmukhi}
        subheader={bani.length}
        titleTypographyProps={{
          className: 'gurmukhi',
        }}
      />
      {supportedLengths && (
        <Menu
          id={`length-${bani.token}`}
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
        >
          {supportedLengths.map(length => (
            <MenuItem
              key={length}
              onClick={() => handleLengthClick(length)}
              selected={length === lengthPref}
            >
              {lengths.keys[length]}
            </MenuItem>
          ))}
        </Menu>
      )}
      <CardActions>
        {
          supportedBanis.sectionOrder[bani.token] && (
            <Link to={`/${path}/pauri-order/${bani.token}`}>
              <Button>
                Pauri Order
              </Button>
            </Link>
          )
        }
        {
          supportedBanis.lineOrder[bani.token] && (
            <Link to={`/${path}/line-order/${bani.token}`}>
              <Button>
                Line Order
              </Button>
            </Link>
          )
        }
      </CardActions>
    </Card>
  );
};
BaniName.propTypes = {
  bani: PropTypes.shape({}).isRequired,
  settings: PropTypes.shape({}).isRequired,
  testingMode: PropTypes.bool.isRequired,
  updateBaniLengthPref: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  settings: state.settings,
  testingMode: state.testingMode,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateBaniLengthPref: updateBaniLengthPrefAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BaniName);
