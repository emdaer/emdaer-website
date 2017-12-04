import React from 'react';
import Link from 'gatsby-link';
import g from 'glamorous';
import { ExternalLink, ExternalLinkIcon } from '../utils/styleHelpers';

import logo from '../assets/logo-white.svg';

const EMDAER_GITHUB = 'https://github.com/emdaer/emdaer';

const LogoLink = g(Link)({
  margin: '0 auto 0 0',
});

export default () => [
  <LogoLink key="logo" to="/">
    <g.Img marginBottom="0" src={logo} alt="logo" width="120px" />
  </LogoLink>,
  <ExternalLink key="gh-link" href={EMDAER_GITHUB}>
    GitHub <ExternalLinkIcon />
  </ExternalLink>,
];
