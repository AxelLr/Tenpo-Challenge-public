import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'styled-components';
import Box from './Box';
import {DotIndicator} from 'react-native-indicators';

const FullScreenLoader = () => {
  const {colors} = useTheme();

  return (
    <Box
      style={[StyleSheet.absoluteFillObject]}
      zIndex={3}
      bg={colors.black}
      opacity={0.7}
      flex={1}
      alignItems="center"
      justifyContent="center">
      <DotIndicator color={colors.lightGray} size={10} count={3} />
    </Box>
  );
};

export default FullScreenLoader;
