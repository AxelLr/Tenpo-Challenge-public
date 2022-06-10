import React from 'react';
import {Image} from 'react-native';
// UTIL - STYLES
import {IRestaurant} from '@src/utils/mockData';
import {useTheme} from 'styled-components';
import Star from '@src/assets/Star.svg';
//COMPONENTS
import Typography from '@src/components/Typography';
import Box from '@src/components/layout/Box';
import {Offer} from '../ProductsLanding.styles';

interface Props {
  item: IRestaurant;
  darkBackground: boolean;
}

const RestaurantItem: React.FC<Props> = ({item, darkBackground}) => {
  const {colors} = useTheme();

  const {logo, delay, name, rating, disscount} = item;

  const offer = (
    <Box
      height={104}
      bg={darkBackground ? colors.crow : 'transparent'}
      borderRadius={darkBackground ? 20 : 0}
      justifyContent="center"
      alignItems="center"
      mb={1}>
      <Offer>
        <Typography textAlign="center" color={colors.white} fontSize={10}>
          {disscount}% DCTO
        </Typography>
      </Offer>
      <Image source={logo} />
    </Box>
  );

  return (
    <Box mr={2} pt={3}>
      {offer}
      <Typography textAlign="center" color={colors.gray}>
        {name}
      </Typography>
      <Box flexDirection="row" alignItems="center">
        <Star />
        <Typography color={colors.gray}>{rating} </Typography>
        <Typography ml={1} color={colors.gray}>
          {delay}
        </Typography>
      </Box>
    </Box>
  );
};

export default RestaurantItem;
