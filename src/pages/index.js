import React from 'react';
import g from 'glamorous';
import { rhythm } from '../utils/typography';

const IndexPage = () => (
  <div>
    <g.Section
      fontSize={rhythm(4.5)}
      marginTop={rhythm(2)}
      marginBottom={rhythm(2)}
      textAlign="center"
    >
      <span role="img" aria-label="Notebook">
        📓
      </span>
      <g.P fontSize={rhythm(1.5)} textAlign="center">
        Create and Maintain better READMEs
      </g.P>
    </g.Section>
  </div>
);

export default IndexPage;
