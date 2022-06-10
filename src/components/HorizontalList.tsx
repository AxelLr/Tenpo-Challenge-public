import Box from '@src/components/layout/Box';
import React from 'react';
import {ScrollView} from 'react-native';
import {useTheme} from 'styled-components';
import Typography from './Typography';

interface HorizontalListProps<T> {
  title: string;
  data: T[];
  spacedTitle?: boolean;
  renderItem: (item: T) => React.ReactNode;
}

export function HorizontalList<T>({
  title,
  renderItem,
  data,
  spacedTitle,
}: HorizontalListProps<T>) {
  const {colors} = useTheme();
  return (
    <Box mb="15%">
      <Typography
        mb={spacedTitle ? 14 : 0}
        bold
        color={colors.dark}
        fontSize={18}>
        {title.toUpperCase()}
      </Typography>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {data?.map((item: T) => renderItem(item))}
      </ScrollView>
    </Box>
  );
}

export default HorizontalList;
