import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import g, { ThemeProvider } from 'glamorous';
import { Navbar, Nav, Container, Row, Col } from 'reactstrap';
import { rhythm } from '../utils/typography';
import theme from '../utils/theme';
import { ExternalLink, ExternalLinkIcon } from '../utils/styleHelpers';
import logo from '../assets/logo-white-small.png';

const EMDAER_GITHUB = 'https://github.com/emdaer/emdaer';

const NavbarWrapper = g.div(props => ({
  backgroundColor: props.theme.brand,
}));

const LogoLink = g(Link)({
  margin: `${rhythm(1 / 3)} 0`,
  padding: 0,
});

const Header = () => (
  <NavbarWrapper>
    <Container>
      <Navbar expand="md">
        <LogoLink to="/">
          <g.Img marginBottom="0" src={logo} alt="logo" />
        </LogoLink>
        <Nav className="ml-auto">
          <ExternalLink href={EMDAER_GITHUB}>
            GitHub <ExternalLinkIcon />
          </ExternalLink>
        </Nav>
      </Navbar>
    </Container>
  </NavbarWrapper>
);

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet title="emdaer" />
      <Header />
      <Container>
        <Row>
          <Col>{children()}</Col>
        </Row>
      </Container>
    </div>
  </ThemeProvider>
);

TemplateWrapper.defaultProps = {
  children: () => null,
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
