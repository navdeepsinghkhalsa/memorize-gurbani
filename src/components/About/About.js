import React from 'react';
import { Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
// Components
import TitleBar from '../TitleBar';

import { version } from '../../../package.json';
import about from '../../../README.md';

const About = () => (
  <React.Fragment>
    <TitleBar text="About" />
    <Typography variant="body1">
      <p style={{ textAlign: 'center' }}>
        <Link href="/about/changelog">{`Changelog (${version})`}</Link>
      </p>
      {'This application is a work in progress. Follow progress on '}
      <a
        href="https://github.com/navdeepsinghkhalsa/memorize-gurbani"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <div dangerouslySetInnerHTML={{ __html: about }} />
    </Typography>
  </React.Fragment>
);

export default About;
