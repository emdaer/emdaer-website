import React from 'react';
import PropTypes from 'prop-types';
// import { Container } from 'reactstrap';
import g from 'glamorous';
import { rhythm } from '../utils/typography';
import { mediaQueries } from '../utils/styleHelpers';

const InnerContainer = ({ children, margin, padding }) => (
  <g.Div
    {...{
      /* Fallback */
      margin,
      padding,
    }}
    {...{
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
    }}
  >
    {children}
  </g.Div>
);

InnerContainer.defaultProps = {
  children: null,
  margin: '0 auto',
  padding: `${rhythm(4)} ${rhythm(3 / 4)}`,
};

InnerContainer.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

const RibbonContainer = ({ children, margin, padding, ...rest }) => (
  <g.Section {...rest}>
    <InnerContainer margin={margin} padding={padding}>
      {children}
    </InnerContainer>
  </g.Section>
);

RibbonContainer.defaultProps = {
  children: null,
  margin: '0 auto',
  padding: `${rhythm(4)} ${rhythm(3 / 4)}`,
};

RibbonContainer.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

export default RibbonContainer;
