import React from 'react';
import { render } from 'react-dom';

import Root from './app/Root';

const App = () => (
  <Root />
);

render(<App />, document.getElementById('app'));
