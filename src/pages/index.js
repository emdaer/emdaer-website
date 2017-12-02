import React from 'react';
import PropTypes from 'prop-types';
import g, { withTheme } from 'glamorous';
import remark from 'remark';
import reactRenderer from 'remark-react';

import whatIsEmdaer from '@emdaer/meta/lib/README/what-is-emdaer';
import howEmdaerWorks from '@emdaer/meta/lib/README/how-emdaer-works';
import addingEmdaer from '@emdaer/meta/lib/README/adding-emdaer-to-your-project';

import { rhythm } from '../utils/typography';
import { ExternalLink, ExternalLinkIcon } from '../utils/styleHelpers';
import RibbonContainer from '../components/RibbonContainer';

const createMarkup = content =>
  remark()
    .use(reactRenderer)
    .processSync(content).contents;

const GET_STARTED =
  'https://github.com/emdaer/emdaer#adding-emdaer-to-your-project';

const GettingStartedLink = g(ExternalLink)({
  marginTop: rhythm(1),
});

const IndexPage = ({ theme }) => (
  <div>
    <RibbonContainer
      color="white"
      textAlign="center"
      backgroundColor="#F9F9F9"
      padding={`${rhythm(2)} ${rhythm(3 / 4)}`}
    >
      <g.H1 color={theme.brand}>emdaer</g.H1>
      <g.H2 color={theme.brand}>
        <small>
          <span role="img" aria-label="Notebook">
            📓
          </span>{' '}
          Create and Maintain Better READMEs
        </small>
      </g.H2>
      <GettingStartedLink
        href={GET_STARTED}
        primaryColor={theme.brand}
        hoverColor="white"
        padding={`${rhythm(1 / 2)} ${rhythm(1 / 2)}`}
      >
        Get Started <ExternalLinkIcon />
      </GettingStartedLink>
    </RibbonContainer>
    <RibbonContainer>{createMarkup(whatIsEmdaer)}</RibbonContainer>
    <RibbonContainer backgroundColor="#F9F9F9">
      {createMarkup(howEmdaerWorks)}
    </RibbonContainer>
    <RibbonContainer>{createMarkup(addingEmdaer)}</RibbonContainer>
  </div>
);

IndexPage.propTypes = {
  theme: PropTypes.shape({
    brand: PropTypes.string.isRequired,
  }).isRequired,
};

export default withTheme(IndexPage);
