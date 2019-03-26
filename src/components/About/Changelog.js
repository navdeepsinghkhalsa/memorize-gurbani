import React from 'react';
import Typography from '@material-ui/core/Typography';
// Components
import TitleBar from '../TitleBar';

import changelog from '../../../CHANGELOG.md';

const About = () => (
  <React.Fragment>
    <TitleBar text="Changelog" />
    <Typography variant="body1">
      <div dangerouslySetInnerHTML={{ __html: changelog }} />
    </Typography>
  </React.Fragment>
);

export default About;
