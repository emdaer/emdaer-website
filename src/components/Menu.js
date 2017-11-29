import React from 'react';
import Link from 'gatsby-link';
import { Navbar, Nav } from 'reactstrap';
import g from 'glamorous';
import { rhythm } from '../utils/typography';
import { ExternalLink, ExternalLinkIcon } from '../utils/styleHelpers';

import logo from '../assets/logo-white.svg';

const EMDAER_GITHUB = 'https://github.com/emdaer/emdaer';

const LogoLink = g(Link)({
  margin: `${rhythm(1 / 3)} 0`,
  padding: 0,
});

export default () => (
  <Navbar expand="md">
    <LogoLink to="/">
      <g.Img marginBottom="0" src={logo} alt="logo" width="120px" />
    </LogoLink>
    <Nav className="ml-auto">
      <ExternalLink href={EMDAER_GITHUB}>
        GitHub <ExternalLinkIcon />
      </ExternalLink>
    </Nav>
  </Navbar>
);
