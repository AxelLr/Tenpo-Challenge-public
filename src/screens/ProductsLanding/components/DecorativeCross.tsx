import React from 'react';
import CrossIcon from '@src/assets/Cross.svg';
import AnimatedBox from '@src/components/layout/AnimatedBox';

const DecorativeCross = ({fadeIn, tx, ty, rt, ...rest}: any) => {
  return (
    <AnimatedBox
      {...rest}
      top={0}
      position="absolute"
      style={{
        opacity: fadeIn,
        transform: [
          {translateX: tx || 0},
          {translateY: ty || 0},
          {rotate: rt || '0deg'},
        ],
      }}>
      <CrossIcon />
    </AnimatedBox>
  );
};
export default DecorativeCross;
