import React from 'react';
import {ICategory} from '@src/utils/mockData';
import {useTheme} from 'styled-components';
// COMPONENTS
import Box from '@src/components/layout/Box';
import Typography from '@src/components/Typography';
import Image from '@src/components/layout/Image';

interface Props {
  item: ICategory;
}

const CategoryItem: React.FC<Props> = ({item}) => {
  const {backgroundImage, name} = item;

  const {colors} = useTheme();

  return (
    <Box justifyContent="center" alignItems="center">
      <Image source={backgroundImage} />
      <Typography
        position="absolute"
        zIndex={2}
        fontWeight="bold"
        fontSize={15}
        color={colors.white}>
        {name.toUpperCase()}
      </Typography>
    </Box>
  );
};

export default CategoryItem;
