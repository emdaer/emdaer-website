import React from 'react';
import g, { withTheme } from 'glamorous';
import { rhythm } from '../utils/typography';
import Menu from './Menu';
import RibbonContainer from './RibbonContainer';

export default withTheme(({ theme: { brand } }) => (
  <RibbonContainer
    color="white"
    backgroundColor={brand}
    padding={`${rhythm(1 / 2)} ${rhythm(3 / 4)}`}
  >
    <g.Div display="flex" justifyContent="center">
      <Menu />
    </g.Div>
  </RibbonContainer>
));
