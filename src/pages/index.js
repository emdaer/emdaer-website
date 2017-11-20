import React from 'react';
import g from 'glamorous';
import { Jumbotron } from 'reactstrap';
import remark from 'remark';
import reactRenderer from 'remark-react';
import whatIsEmdaer from '@emdaer/meta/lib/README/what-is-emdaer';
import howEmdaerWorks from '@emdaer/meta/lib/README/how-emdaer-works';
import addingEmdaer from '@emdaer/meta/lib/README/adding-emdaer-to-your-project';
import { rhythm } from '../utils/typography';

const createMarkup = content =>
  remark()
    .use(reactRenderer)
    .processSync(content).contents;

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
    <Jumbotron>{createMarkup(whatIsEmdaer)}</Jumbotron>
    <g.Section>{createMarkup(howEmdaerWorks)}</g.Section>
    <Jumbotron>{createMarkup(addingEmdaer)}</Jumbotron>
  </div>
);

export default IndexPage;
