import React from 'react';
import { Container } from 'reactstrap';
import g from 'glamorous';
import Menu from './Menu';

const NavbarWrapper = g.div(props => ({
  backgroundColor: props.theme.brand,
}));

export default () => (
  <NavbarWrapper>
    <Container>
      <Menu />
    </Container>
  </NavbarWrapper>
);
