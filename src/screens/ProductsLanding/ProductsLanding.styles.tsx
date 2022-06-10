import styled from 'styled-components/native';
import Box from '@src/components/layout/Box';
// ICONS
import Dots from '@src/assets/dots.svg';

export const ProductsContainer = styled(Box)`
  background-color: ${({theme}) => theme.colors.lightGreen};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const Products = styled.ScrollView`
  background-color: ${({theme}) => theme.colors.white};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-top: 25px;
  padding-left: 16px;
  flex: 1;
`;

export const StepperIcon = styled(Dots)`
  margin-bottom: 30px;
`;

export const Offer = styled(Box)`
  right: -5px;
  top: -10px;
  z-index: 2;
  position: absolute;
  height: 35px;
  background-color: ${({theme}) => theme.colors.green};
  justify-content: center;
  align-items: center;
  width: 35px;
  border-radius: 35px;
`;
