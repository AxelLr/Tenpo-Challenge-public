import React from 'react';
import {KeyboardTypeOptions, TextInput} from 'react-native';
import styled, {useTheme} from 'styled-components';
import {
  space,
  layout,
  flexbox,
  border,
  position,
  shadow,
  zIndex,
  ZIndexProps,
  color,
  fontSize,
  FontSizeProps,
  SpaceProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  FlexboxProps,
  LayoutProps,
  ColorProps,
} from 'styled-system';

export interface IStyledInput
  extends LayoutProps,
    SpaceProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    ColorProps,
    FlexboxProps,
    ZIndexProps,
    FontSizeProps {}

const StyledInput = styled(TextInput)<IStyledInput>`
  ${layout}
  ${color}
  ${space}
  ${border}
  ${position}
  ${shadow}
  ${flexbox}
  ${zIndex}
  ${fontSize}
`;

interface InputProps {
  onChange: (text: string) => void;
  value: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  placeholderColor?: string;
  multiline?: boolean;
  numberOfLines?: number;
}

const Input: React.FC<InputProps & IStyledInput> = ({
  onChange,
  value,
  placeholder,
  keyboardType,
  placeholderColor,
  multiline,
  numberOfLines,
  ...rest
}) => {
  const {colors} = useTheme();

  return (
    <StyledInput
      onChangeText={onChange}
      color={colors.lightGraySecondary}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      bg={colors.white}
      placeholderTextColor={placeholderColor}
      multiline={multiline}
      numberOfLines={numberOfLines}
      textAlignVertical={multiline ? 'top' : 'auto'}
      {...rest}
    />
  );
};

export default Input;
