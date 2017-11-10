import g from 'glamorous';
import FaExternalLink from 'react-icons/lib/fa/external-link';
import { rhythm } from '../utils/typography';

export const TextLink = g.a({
  color: 'white',
  ':hover,:active,:focus': {
    color: 'white',
    textDecoration: 'none',
  },
});

export const ExternalLink = g(TextLink)({
  border: '2px solid white',
  borderRadius: rhythm(1 / 5),
  padding: `${rhythm(1 / 8)} ${rhythm(1 / 3)}`,
  color: 'white',
});

export const ExternalLinkIcon = g(FaExternalLink)({
  marginBottom: '2px',
});
