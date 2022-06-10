import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'styled-components';
import {IFavourite} from '@src/utils/mockData';
// COMPONENTS
import Box from '@src/components/layout/Box';
import Typography from '@src/components/Typography';
import Image from '@src/components/layout/Image';
import Star from '@src/assets/Star.svg';

interface Props {
  item: IFavourite;
}

const FavouriteItem: React.FC<Props> = ({item}) => {
  const {productName, rating, company, delay, productImage, companyImage} =
    item;

  const {colors} = useTheme();

  const productRate = (
    <Box flexDirection="row" alignItems="center">
      <Star />
      <Typography ml={1} fontSize={12} color={colors.gray}>
        {rating}
      </Typography>
    </Box>
  );

  return (
    <Box
      style={styles.boxShadow}
      bg={colors.white}
      mr={2}
      mb={4}
      pb={1}
      borderRadius={20}>
      <Image
        position="absolute"
        zIndex={3}
        source={companyImage}
        top={12}
        left={3}
      />
      <Image source={productImage} resizeMode="cover" />
      <Box px={12} pb={2}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Typography fontSize={12} color={colors.gray}>
            {productName}
          </Typography>
          {productRate}
        </Box>
        <Box
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between">
          <Typography fontWeight="bold" color={colors.green}>
            {company}
          </Typography>
          <Typography fontSize={12} color={colors.gray}>
            {delay}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});

export default FavouriteItem;
