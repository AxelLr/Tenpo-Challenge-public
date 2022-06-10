import {PermissionsAndroid} from 'react-native';
import Config from 'react-native-config';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

// reverse geocoding
export const getAddressFromLatLon = async (
  latitude: number,
  longitude: number,
) => {
  const response = await fetch(
    'https://maps.googleapis.com/maps/api/geocode/json?address=' +
      latitude +
      ',' +
      longitude +
      '&key=' +
      Config.GOOGLE_MAPS_API_KEY,
  );

  const formatResponse = await response.json();
  return formatResponse.results[0].formatted_address;
};

export const requestLocationPermissions = async (): Promise<boolean> => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title:
          '¿Permitir que "Tenpo" acceda a tu ubicación mientras usas la app?',
        message:
          'Tu ubicación actual se mostrará en el mapa y se usará para las indicaciones, los resultados de búsqueda y la hora aproximada de llegada.',
        buttonNegative: 'NO PERMITIR',
        buttonPositive: 'PERMITIR',
      },
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    return false;
  }
};

export const getCurrentLocation = async (): Promise<GeolocationResponse> => {
  const config = {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 3600000,
  };

  return new Promise((res, rej) => {
    Geolocation.getCurrentPosition(
      position => {
        res(position);
      },
      error => rej(error),
      config,
    );
  });
};

export const getUserGeolocation = async (): Promise<any> => {
  try {
    const {coords} = await getCurrentLocation();

    const {latitude, longitude} = coords;

    const locationAddress = await getAddressFromLatLon(latitude, longitude);

    return {latitude, longitude, locationAddress};
  } catch (err) {
    return {error: err};
  }
};
