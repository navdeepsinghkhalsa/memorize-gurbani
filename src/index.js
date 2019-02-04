import React from 'react';
import { render } from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Root from './app/Root';

import './styles.css';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Root />
  </MuiThemeProvider>
);

render(<App />, document.getElementById('app'));
