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

export const ExternalLink = g(TextLink)(
  ({
    theme,
    primaryColor = 'white',
    hoverColor = theme.brand,
    padding = `${rhythm(1 / 8)} ${rhythm(1 / 3)}`,
    textTransform = 'none',
  }) => ({
    display: 'inline-block',
    border: `1px solid ${primaryColor}`,
    borderRadius: rhythm(1 / 5),
    padding,
    color: primaryColor,
    ':hover': {
      border: `1px solid ${primaryColor}`,
      color: hoverColor,
      backgroundColor: primaryColor,
    },
    textTransform,
  })
);

export const ExternalLinkIcon = g(FaExternalLink)({
  marginBottom: '2px',
});

export const mediaQueries = {
  small: '@media only screen and (min-width: 576px)',
  medium: '@media only screen and (min-width: 768px)',
  large: '@media only screen and (min-width: 992px)',
  extraLarge: '@media only screen and (min-width: 1200px)',
};
