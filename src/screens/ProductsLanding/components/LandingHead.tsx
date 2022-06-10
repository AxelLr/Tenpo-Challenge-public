import React, {useRef, useEffect} from 'react';

import {PROFILE_AVATAR} from '@src/assets';
import {StyleSheet} from 'react-native';
// ICONS
import TenpoEats from '@src/assets/TenpoEats.svg';
import DeliverApp from '@src/assets/deliverApp.svg';
import GreenHand from '@src/assets/greenHand.svg';
import BikeIcon from '@src/assets/bike.svg';
// COMPONENTS
import Image from '@src/components/layout/Image';
import SearchIcon from '@src/assets/search.svg';
import Button from '@src/components/Button';
import DecorativeCross from './DecorativeCross';
import Box from '@src/components/layout/Box';
// STYLED COMPONENTS
import {StepperIcon} from '../ProductsLanding.styles';
import {Animated} from 'react-native';
import AnimatedBox from '@src/components/layout/AnimatedBox';
import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '@src/types/navigation';

const LandingHead = () => {
  const bikePosition = useRef(new Animated.Value(0)).current;
  const fadeIn = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(bikePosition, {
        toValue: -55,
        duration: 750,
        useNativeDriver: true,
        delay: 200,
      }),
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
        delay: 200,
      }),
    ]).start();
  }, [bikePosition, fadeIn]);

  const AnimatedBike = (
    <AnimatedBox
      top={10}
      position="absolute"
      style={{
        transform: [{translateX: bikePosition}],
      }}>
      <BikeIcon />
    </AnimatedBox>
  );

  return (
    <>
      <Box
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        pl={10}
        pr={15}>
        <Image mt={2} source={PROFILE_AVATAR} />
        <Button mt={15} onPress={() => navigation.navigate(ROUTES.SetAddress)}>
          <SearchIcon height={25} width={25} />
        </Button>
      </Box>
      <Box
        style={styles.banner}
        flexDirection="row"
        justifyContent="space-between"
        px={15}>
        <Box pt={12}>
          <TenpoEats />
          <DeliverApp />
        </Box>
        <Box flexDirection="row" alignItems="flex-end">
          <DecorativeCross fadeIn={fadeIn} tx={-18} ty={-10} />
          <DecorativeCross fadeIn={fadeIn} tx={20} ty={-40} rt="30deg" />
          <DecorativeCross fadeIn={fadeIn} right={18} ty={-14} rt="45deg" />
          <DecorativeCross fadeIn={fadeIn} right={2} ty={28} rt="60deg" />
          {AnimatedBike}
          <GreenHand width={119} />
          <StepperIcon />
        </Box>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    transform: [{translateY: 20}],
  },
});

export default LandingHead;
