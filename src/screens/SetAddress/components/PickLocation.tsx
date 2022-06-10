import React, {Dispatch, SetStateAction} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Dimensions, StyleSheet} from 'react-native';
// STYKES
import {useTheme} from 'styled-components';
import {SetAddressButton} from '../SetAddress.styles';
// ASSETS
import TenpoMark from '@src/assets/tenpoMark.svg';
// COMPONENTS
import Box from '@src/components/layout/Box';
import Typography from '@src/components/Typography';
import Input from '@src/components/Input';

interface Props {
  coordinates: {latitude: number; longitude: number};
  addLocation: () => void;
  handleMarkerSelection: (e: any) => void;
  addressDetails: string;
  setAddressDetails: Dispatch<SetStateAction<string>>;
  userAddress: string;
}

const {width} = Dimensions.get('window');

const PickLocation: React.FC<Props> = ({
  coordinates,
  addLocation,
  handleMarkerSelection,
  addressDetails,
  setAddressDetails,
  userAddress,
}) => {
  const {colors} = useTheme();

  const emptyAddress = userAddress?.trim() === '';

  return (
    <Box>
      <MapView
        style={styles.mapView}
        onLongPress={handleMarkerSelection}
        region={{
          ...coordinates,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          draggable={true}
          onDragEnd={handleMarkerSelection}
          coordinate={coordinates}>
          <TenpoMark />
        </Marker>
      </MapView>
      <Box px={3} py={4}>
        <Typography bold color={colors.dark} fontSize={16}>
          Agregar información de entrega
        </Typography>
        <Typography color={colors.lightGraySecondary}>
          Depto, oficina, piso, block
        </Typography>
        <Input
          mt={3}
          multiline
          numberOfLines={8}
          borderWidth={1}
          borderColor={colors.lightGray}
          borderRadius={20}
          value={addressDetails}
          onChange={setAddressDetails}
        />
      </Box>
      <SetAddressButton
        onPress={addLocation}
        disabled={emptyAddress}
        mt={2}
        opacity={emptyAddress ? 0.6 : 1}
        style={styles.shadowButton}>
        <Typography
          fontWeight="bold"
          fontSize={16}
          color={colors.white}
          textAlign="center">
          AGREGAR DIRECCIÓN
        </Typography>
      </SetAddressButton>
    </Box>
  );
};

const styles = StyleSheet.create({
  shadowButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  mapView: {
    width: width,
    height: 240,
    zIndex: -1,
  },
});

export default PickLocation;
