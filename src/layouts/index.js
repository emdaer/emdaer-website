import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider } from 'glamorous';
import theme from '../utils/theme';
import Header from '../components/Header';

import '../css/index.css';

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet title="emdaer" />
      <Header />
      <div>{children()}</div>
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
