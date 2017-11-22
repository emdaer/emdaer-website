import React from 'react';
import PropTypes from 'prop-types';
// import { Container } from 'reactstrap';
import g from 'glamorous';
import { rhythm } from '../utils/typography';
import { mediaQueries } from '../utils/styleHelpers';

const InnerContainer = g.div(
  {
    /* Fallback */
    margin: '0 auto',
    padding: `${rhythm(2)} ${rhythm(3 / 4)}`,
  },
  {
    [mediaQueries.small]: {
      maxWidth: '560px',
    },
    [mediaQueries.medium]: {
      maxWidth: '720px',
    },
    [mediaQueries.large]: {
      maxWidth: '960px',
    },
    [mediaQueries.extraLarge]: {
      maxWidth: '1120px',
    },
  }
);

const RibbonContainer = ({ children, ...rest }) => (
  <g.Section {...rest}>
    <InnerContainer>{children}</InnerContainer>
  </g.Section>
);

RibbonContainer.defaultProps = {
  children: null,
};

RibbonContainer.propTypes = {
  children: PropTypes.node,
};

export default RibbonContainer;
