import styled from 'styled-components/native';
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

interface IStyledImage
  extends LayoutProps,
    SpaceProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    ColorProps,
    FlexboxProps {}

const Image = styled.Image<IStyledImage>`
  ${layout}
  ${color}
  ${space}
  ${border}
  ${position}
  ${shadow}
  ${flexbox}
`;

export default Image;
