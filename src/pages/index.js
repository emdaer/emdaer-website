import React from 'react';
import PropTypes from 'prop-types';
import g, { withTheme } from 'glamorous';
import { Parser } from 'html-to-react';
import { rhythm } from '../utils/typography';
import { ExternalLink } from '../utils/styleHelpers';
import RibbonContainer from '../components/RibbonContainer';

const htmlToReactParser = new Parser();

const GET_STARTED =
  'https://github.com/emdaer/emdaer#adding-emdaer-to-your-project';

const EMDAER_META_BASE_PATH = 'node_modules/@emdaer/meta/src/README';

function findHtmlByAbsolutePath(data, path) {
  return htmlToReactParser.parse(
    data.allMarkdownRemark.edges.find(
      edge => edge.node.fileAbsolutePath === `${EMDAER_META_BASE_PATH}/${path}`
    ).node.html
  );
}

const GettingStartedLink = g(ExternalLink)({
  marginTop: rhythm(1),
});

const IndexPage = ({ theme, data }) => (
  <div>
    <RibbonContainer color="white" textAlign="center" backgroundColor="#F9F9F9">
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
        padding={`${rhythm(1 / 3)} ${rhythm(1 / 2)}`}
        textTransform="uppercase"
      >
        Get Started
      </GettingStartedLink>
    </RibbonContainer>
    <RibbonContainer>
      {findHtmlByAbsolutePath(data, 'what-is-emdaer.md')}
    </RibbonContainer>
    <RibbonContainer backgroundColor="#F9F9F9">
      {findHtmlByAbsolutePath(data, 'how-emdaer-works.md')}
    </RibbonContainer>
    <RibbonContainer>
      {findHtmlByAbsolutePath(data, 'adding-emdaer-to-your-project.md')}
    </RibbonContainer>
  </div>
);

IndexPage.propTypes = {
  theme: PropTypes.shape({
    brand: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            fileAbsolutePath: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
          }),
        })
      ),
    }),
  }).isRequired,
};

export default withTheme(IndexPage);

/**
 * The query that grabs each markdown file from @emdaer/meta
 */
export const query = graphql`
  query AllContent {
    allMarkdownRemark {
      edges {
        node {
          fileAbsolutePath
          html
        }
      }
    }
  }
`;
