import React from 'react';
import g from 'glamorous';
import { rhythm } from '../utils/typography';
import Menu from './Menu';
import RibbonContainer from './RibbonContainer';

export default () => (
  <RibbonContainer
    color="white"
    backgroundColor="#E25E3E"
    padding={`${rhythm(1 / 2)} ${rhythm(3 / 4)}`}
  >
    <g.Div display="flex" justifyContent="center">
      <Menu />
    </g.Div>
  </RibbonContainer>
);
