import React, {useEffect, useState} from 'react';
// UTIL
import {Alert} from 'react-native';
import {
  getAddressFromLatLon,
  getUserGeolocation,
  requestLocationPermissions,
} from '@src/utils/geolocation';
import {useUser} from '@src/Context/UserContext';
import {IRootStack} from '@src/types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';
// STYLES
import {useTheme} from 'styled-components';
// COMPONENTS
import Box from '@src/components/layout/Box';
import FullScreenLoader from '@src/components/layout/FullScreenLoader';
import Typography from '@src/components/Typography';
import AddressInput from './components/AddressInput';
import PickLocation from './components/PickLocation';
// ICONS
import LocationIcon from '@src/assets/locationIcon.svg';

type SetAddressNavigationProp = StackNavigationProp<IRootStack>;

type Props = {
  navigation: SetAddressNavigationProp;
};

const DEFAULT_COORDS = {
  latitude: -34.61397614082357,
  longitude: -58.491434063006075,
};

const showErrorAlert = () =>
  Alert.alert('Lo sentimos', 'Ocurrio un error accediendo a tu ubicación.', [
    {text: 'Entiendo'},
  ]);

const SetAddress = ({navigation}: Props) => {
  const {colors} = useTheme();

  const {user, setUser} = useUser();

  const [coordinates, setCoordinates] = useState(user.coordinates);

  const [userAddress, setUserAddress] = useState(user.address);

  const [addressDetails, setAddressDetails] = useState(user.addressDetails);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requestUserLocation = async () => {
      const isGranted = await requestLocationPermissions();

      if (isGranted) {
        const {latitude, longitude, locationAddress, error} =
          await getUserGeolocation();

        if (error) {
          showErrorAlert();
          setCoordinates(DEFAULT_COORDS);
          setUserAddress('');
        } else {
          setCoordinates({latitude, longitude});
          setUserAddress(locationAddress);
        }
      } else {
        setUserAddress('');
        setCoordinates(DEFAULT_COORDS);
      }

      setLoading(false);
    };

    const timer = setTimeout(requestUserLocation, 600);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const setUserLocation = () => {
    if (userAddress && userAddress.trim() !== '') {
      setUser(usr => ({
        ...usr,
        address: userAddress.trim(),
        coordinates,
        addressDetails: addressDetails?.trim(),
      }));
      navigation.goBack();
    }
  };

  const handleMarkerSelection = async (e: any) => {
    const {latitude, longitude} = e.nativeEvent.coordinate;
    const locationAddress = await getAddressFromLatLon(latitude, longitude);
    setCoordinates({latitude, longitude});
    setUserAddress(locationAddress);
  };

  return (
    <Box bg={colors.white} flex={1}>
      {loading && <FullScreenLoader />}

      <Box justifyContent="flex-end" height={148} bg={colors.lightGreen}>
        <Box
          mb={45}
          justifyContent="center"
          flexDirection="row"
          alignItems="center">
          <LocationIcon />
          <Typography ml={2} fontSize={3} color={colors.green}>
            Agregar dirección de entrega
          </Typography>
        </Box>
        <AddressInput
          onChange={setUserAddress}
          value={userAddress}
          onCrossPress={() => setUserAddress('')}
        />
      </Box>
      {loading ? (
        <Typography
          mt="50%"
          textAlign="center"
          fontSize={20}
          color={colors.lightGraySecondary}>
          Esperando tu ubicación...
        </Typography>
      ) : (
        <PickLocation
          addressDetails={addressDetails}
          setAddressDetails={setAddressDetails}
          addLocation={setUserLocation}
          coordinates={coordinates}
          userAddress={userAddress}
          handleMarkerSelection={handleMarkerSelection}
        />
      )}
    </Box>
  );
};

export default SetAddress;
