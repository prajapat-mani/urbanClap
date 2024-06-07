import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Src/Screens/Home';
import Bookings from './Src/Screens/Bookings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Rewards from './Src/Screens/Rewards';
import Native from './Src/Screens/Native';
import Account from './Src/Screens/Account';
import { Image, Text } from 'react-native';
import logoImage from "./Assets/LogoUC.png"
import Ionicon from "react-native-vector-icons/Ionicons"
import WalletIcon from "react-native-vector-icons/Ionicons"
import AccountIcon from "react-native-vector-icons/MaterialCommunityIcons"


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor:"black",
      tabBarInactiveTintColor:"grey"
    }}
    >
      <Tab.Screen name="UC" component={Home}  
        options={{
          headerTitle:"",
          
          tabBarIcon: ({size}) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={logoImage}
              />
            );
          },
        }}
      />
      <Tab.Screen name="Bookings" component={Bookings} 
      options={{
        tabBarIcon: ({ size }) => <Ionicon name="newspaper-outline" size={size} />

      }}
      />
      <Tab.Screen name="Rewards" component={Rewards} 
        options={{
          headerTintColor:"white",
          headerTitle:"",
          
          tabBarIcon: ({ size }) => <WalletIcon name="wallet-outline" size={size} />,
  headerStyle:{backgroundColor:"black"},
  headerLeft:()=><Text style={{color:"white",fontSize:20}}>Refer & Earn</Text>,
  
        }}
      />
      <Tab.Screen name="Native" component={Native}
      
      options={{
        tabBarIcon: ({ size }) => <Ionicon name="archive" size={size} />

      }}/>
      <Tab.Screen name="Account" component={Account} 
      
      options={{
        headerShown:false,
        tabBarIcon: ({ size }) => <AccountIcon name="account" size={size} />

      }}/>


    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default BottomTabs

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator 
//       screenOptions={()=>{
        
//       }}>
//        <Stack.Screen component={Home} name='home'/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default App