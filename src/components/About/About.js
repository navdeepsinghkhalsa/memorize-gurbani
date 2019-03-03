import React from 'react';
import Typography from '@material-ui/core/Typography';
// Components
import TitleBar from '../TitleBar';

import about from '../../../README.md';

const About = () => (
  <React.Fragment>
    <TitleBar text="About" />
    <Typography variant="body1">
      {'This application is a work in progress. Follow progress on '}
      <a href="https://github.com/navdeepsinghkhalsa/memorize-gurbani" target="_blank" rel="noopener noreferrer">GitHub</a>
      <div dangerouslySetInnerHTML={{ __html: about }} />
    </Typography>
  </React.Fragment>
);

export default About;
