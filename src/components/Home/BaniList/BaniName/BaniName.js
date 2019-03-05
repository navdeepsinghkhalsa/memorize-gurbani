import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { supportedBanis } from '../../../../app/config';

// Styles
import styles from './BaniName.css';

const BaniName = ({ bani }) => (
  <Card className={styles.baniName}>
    <CardContent>
      <Typography variant="h5" className="gurmukhi">
        {bani.gurmukhi}
      </Typography>
    </CardContent>
    <CardActions>
      {
        supportedBanis.sectionOrder[bani.token] && (
          <Link to={`/pauri-order/${bani.token}`}>
            <Button>
              Pauri Order
            </Button>
          </Link>
        )
      }
      {
        supportedBanis.lineOrder[bani.token] && (
          <Link to={`/line-order/${bani.token}`}>
            <Button>
              Line Order
            </Button>
          </Link>
        )
      }
    </CardActions>
  </Card>
);
BaniName.propTypes = {
  bani: PropTypes.shape({}).isRequired,
};

export default BaniName;
