import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, SafeAreaView, Text } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AccountIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Src/Screens/BottomTabs/Home';
import Bookings from './Src/Screens/BottomTabs/Bookings';
import Rewards from './Src/Screens/BottomTabs/Rewards';
import Native from './Src/Screens/BottomTabs/Native';
import Account from './Src/Screens/BottomTabs/Account';
import SmartLock from './Src/Screens/SmartLock';
import logoImage from './Assets/LogoUC.png';
import SpaForWomen from './Src/Screens/BottomTabs/SpaForWomen';
import Login from './Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
      }}
    >
      <Tab.Screen
        name="UC"
        component={Home}
        options={{
          headerTitle: '',
          tabBarIcon: ({ size }) => (
            <Image
              style={{ width: size, height: size }}
              source={logoImage}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicon name="newspaper-outline" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          headerTintColor: 'white',
          headerTitle: '',
          tabBarIcon: ({ size }) => (
            <Ionicon name="wallet-outline" size={size} />
          ),
          headerStyle: { backgroundColor: 'black' },
          headerLeft: () => (
            <Text style={{ color: 'white', fontSize: 20 }}>Refer & Earn</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Native"
        component={Native}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicon name="archive" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <AccountIcon name="account" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
    <SafeAreaView style={{flex:1}}>

      <Stack.Navigator screenOptions={{
        headerBackTitleVisible:false
        
      }}>
        {/* <Stack.Screen name='Login' component={Login}/>/ */}
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        options={{headerTitle:""}}
          name="SmartLock"
          component={SmartLock}
        />
         <Stack.Screen
        options={{headerTitle:""}}

          name="SpaForWomen"
          component={SpaForWomen}
        />
      </Stack.Navigator>
    </SafeAreaView>
    </NavigationContainer>
  );
};

export default App
