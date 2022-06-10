import styled from 'styled-components/native';
import {Animated} from 'react-native';
import {
  space,
  layout,
  flexbox,
  border,
  position,
  shadow,
  zIndex,
  color,
} from 'styled-system';

import {IBox} from './Box';

const AnimatedBox = styled(Animated.View)<IBox>`
  ${layout}
  ${color}
  ${space}
  ${border}
  ${position}
  ${shadow}
  ${flexbox}
  ${zIndex}
`;

export default AnimatedBox;
