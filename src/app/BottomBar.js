import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// Configuration
import routes from './routes';

const styles = {
  root: {
    bottom: 0,
    left: 0,
    position: 'fixed',
    width: '100%',
  },
};

const getPathValue = (props) => {
  const { location: { pathname } } = props;
  return routes.findIndex(el => el.path === pathname) || 0;
};

class SimpleBottomNavigation extends React.Component {
  constructor(props) {
    super();
    const value = getPathValue(props);
    this.state = { value };
  }

  componentWillReceiveProps(newProps) {
    const value = getPathValue(newProps);
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        showLabels
        className={classes.root}
      >
        {routes
          .filter(item => 'nav' in item)
          .map(route => (
            <BottomNavigationAction
              key={route.id}
              component={Link}
              to={route.path}
              icon={route.nav.icon}
              label={route.nav.label}
            />
          ))}
      </BottomNavigation>
    );
  }
}
SimpleBottomNavigation.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(withRouter(SimpleBottomNavigation));
