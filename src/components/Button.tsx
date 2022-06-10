import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {
  space,
  layout,
  flexbox,
  border,
  position,
  shadow,
  color,
  SpaceProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  FlexboxProps,
  LayoutProps,
  ColorProps,
} from 'styled-system';

interface IButton
  extends LayoutProps,
    SpaceProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    ColorProps,
    FlexboxProps {}

const StyledButton = styled(TouchableOpacity)<IButton>`
  ${layout}
  ${color}
  ${space}
  ${border}
  ${position}
  ${shadow}
  ${flexbox}
`;

export default StyledButton;
