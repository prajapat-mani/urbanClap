import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform } from 'react-native';

const Native = () => {
  const [location, setLocation] = useState(null);

  // const hasLocationPermission = async () => {
  //   let permission;

  //   if (Platform.OS === 'ios') {
  //     permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
  //   } else {
  //     permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
  //   }

  //   const result = await request(permission);

  //   if (result === RESULTS.GRANTED) {
  //     return true;
  //   }

  //   Alert.alert('Location permission denied');
  //   return false;
  // };

  // const getLocation = async () => {
  //   const hasPermission = await hasLocationPermission();

  //   if (!hasPermission) {
  //     return;
  //   }

  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       setLocation(position);
  //     },
  //     (error) => {
  //       Alert.alert(`Code ${error.code}`, error.message);
  //       setLocation(null);
  //     },
  //     {
  //       accuracy: {
  //         android: 'high',
  //         ios: 'best',
  //       },
  //       enableHighAccuracy: true,
  //       timeout: 15000,
  //       maximumAge: 10000,
  //       distanceFilter: 0,
  //     }
  //   );
  // };
  useEffect(()=>{
requestPermission()
  },[])

  const requestPermission = async() =>{
    if(Platform.OS === 'ios'){
      // getCurrentLocation();
      request(PERMISSIONS.IOS.LOCATION_ALWAYS).then((result) => {
        console.log('err',result)
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              "This feature is not available (on this device / in this context)"
            );
            break;
          case RESULTS.DENIED:
            console.log(
              "The permission has not been requested / is denied but requestable"
            );
            break;
          case RESULTS.LIMITED:
            console.log("The permission is limited: some actions are possible");
            break;
          case RESULTS.GRANTED:
            console.log("The permission is granted");
            // Permission has been granted - app can request location coordinates
        //  getCurrentLocation();r
            break;
          case RESULTS.BLOCKED:
            console.log("The permission is denied and not requestable anymore");
            break;
        }
      }).catch((err)=>{
        console.log('ee=>>>>>',err)
      })
    }else{
      try {
       const granted = await PermissionsAndroid.request(
         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
         {
           title: 'Device current location permission',
           message:
             'Allow app to get your current location',
           buttonNeutral: 'Ask Me Later',
           buttonNegative: 'Cancel',
           buttonPositive: 'OK',
         },
       );
       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
         getCurrentLocation();
       } else {
         console.log('Location permission denied');
       }
     } catch (err) {
       console.warn(err);
     }
    }
  }
  const getCurrentLocation = () =>{
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(
       (position) => {
           console.log(position);
           setLocation(position)

       },
       (error) => {
         console.log("map error: ",error);
           console.log(error.code, error.message);
       },
       { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
   );
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Button title="Get Location" onPress={getLocation} /> */}
      {location && (
        <Text>
          Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
        </Text>
      )}
    </View>
  );
};

export default Native;
