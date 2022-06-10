import React from 'react';
import CrossIcon from '@src/assets/crossIcon.svg';
// STYLES
import {GestureResponderEvent, StyleSheet} from 'react-native';
import {useTheme} from 'styled-components';
// COMPONENTS
import Input from '@src/components/Input';
import AnimatedBox from '@src/components/layout/AnimatedBox';

interface Props {
  value: string;
  onChange: (text: string) => void;
  onCrossPress: (e: GestureResponderEvent) => void;
}

const AddressInput: React.FC<Props> = ({value, onChange, onCrossPress}) => {
  const {colors} = useTheme();

  const emptyValue = value?.trim() === '';

  return (
    <AnimatedBox
      zIndex={200}
      style={styles.addressInput}
      borderWidth={emptyValue ? 1 : 0}
      borderColor={colors.red}
      bg={colors.white}
      height={56}
      px={4}
      borderRadius={40}>
      <Input
        height="100%"
        width="95%"
        color={colors.darkGreen}
        fontSize={16}
        value={value}
        onChange={onChange}
        placeholder="Escribe tu dirección"
        placeholderColor={emptyValue ? colors.red : colors.lightGraySecondary}
      />
      {!emptyValue && (
        <CrossIcon style={styles.crossIcon} onPress={onCrossPress} />
      )}
    </AnimatedBox>
  );
};

const styles = StyleSheet.create({
  addressInput: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    position: 'absolute',
    width: '100%',
    transform: [{translateY: 25}],
  },
  crossIcon: {
    position: 'absolute',
    right: 16,
    top: '35%',
  },
});

export default AddressInput;
