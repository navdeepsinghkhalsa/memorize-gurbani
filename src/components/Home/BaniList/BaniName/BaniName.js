import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
      <Link to={`/pauri-order/${bani.token}`}>
        <Button>
          Pauri Order
        </Button>
      </Link>
    </CardActions>
  </Card>
);
BaniName.propTypes = {
  bani: PropTypes.shape({}).isRequired,
};

export default BaniName;
