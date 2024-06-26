import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bookings from '../Screens/BottomTabs/Bookings';
import Home from '../Screens/BottomTabs/Home';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bookings" component={Bookings} />
    </Tab.Navigator>
  );
}
export default BottomTabs