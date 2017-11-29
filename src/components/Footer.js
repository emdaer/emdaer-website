import React from 'react';
import { Nav, Container } from 'reactstrap';
import g from 'glamorous';
import { rhythm } from '../utils/typography';
import { ExternalLink, ExternalLinkIcon } from '../utils/styleHelpers';

const EMDAER_GITHUB = 'https://github.com/emdaer/emdaer';

const Footer = g.div(props => ({
  backgroundColor: props.theme.brand,
  boxShadow: 'inset 0 10px 10px -5px rgba(0,0,0,0.2)',
  color: 'white',
  padding: rhythm(1),
}));

const FooterContainer = g(Container)({
  display: 'flex',
  flexDirection: 'row',
});

export default () => (
  <Footer>
    <FooterContainer>
      <span>
        emdaer is{' '}
        <a href="https://github.com/emdaer/emdaer/blob/master/LICENSE">
          MIT licensed
        </a>.
      </span>
      <Nav className="ml-auto">
        <ExternalLink href={EMDAER_GITHUB}>
          GitHub <ExternalLinkIcon />
        </ExternalLink>
      </Nav>
    </FooterContainer>
  </Footer>
);
