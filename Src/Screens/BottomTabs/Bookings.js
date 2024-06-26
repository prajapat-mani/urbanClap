
import React, { useEffect, useState } from 'react';
import { View, Text, Button, Platform, PermissionsAndroid, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const Bookings = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    if (Platform.OS === 'ios') {
      try {
        const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        handlePermissionResult(result);
      } catch (err) {
        console.error('Permission request error:', err);
      }
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location to provide better service.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Location permission granted");
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const handlePermissionResult = (result) => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log("This feature is not available (on this device / in this context)");
        break;
      case RESULTS.DENIED:
        console.log("The permission has not been requested / is denied but requestable");
        break;
      case RESULTS.LIMITED:
        console.log("The permission is limited: some actions are possible");
        break;
      case RESULTS.GRANTED:
        console.log("The permission is granted");
        break;
      case RESULTS.BLOCKED:
        console.log("The permission is denied and not requestable anymore");
        break;
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setLocation(position);
      },
      (error) => {
        console.error("Geolocation error:", error);
        Alert.alert("Error", "Could not fetch location. Please try again.");
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Get Location" onPress={getCurrentLocation} />
      {location ? (
        <Text>
          Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
        </Text>
      ) : (
        <Text>No location data available</Text>
      )}
    </View>
  );
};

export default Bookings;






























