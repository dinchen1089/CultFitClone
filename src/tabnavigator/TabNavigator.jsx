import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Fitness from '../screen/Fitness';
import Home from '../screen/Home';
import Social from '../screen/Social';
import Sports from '../screen/Sports';
import Store from '../screen/Store';

import FitnessIcon from '../icons/FitnessIcon';
import HomeIcon from '../icons/HomeIcon';
import SocialIcon from '../icons/SocialIcon';
import SportsIcon from '../icons/SportsIcon';
import StoreIcon from '../icons/StoreIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          paddingTop: 5,
          backgroundColor: '#000',
          height: 60,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {fontSize: 13, paddingBottom: 5},
        tabBarIcon: ({focused, colour}) => {
          if (route.name === 'Fitness') {
            colour = focused ? 'white' : 'gray';
            return <FitnessIcon color={colour} size={22} />;
          } else if (route.name === 'Home') {
            colour = focused ? 'white' : 'gray';
            return <HomeIcon color={colour} size={22} />;
          } else if (route.name === 'Social') {
            colour = focused ? 'white' : 'gray';
            return <SocialIcon color={colour} size={22} />;
          } else if (route.name === 'Sports') {
            colour = focused ? 'white' : 'gray';
            return <SportsIcon color={colour} size={22} />;
          } else {
            colour = focused ? 'white' : 'gray';
            return <StoreIcon color={colour} size={22} />;
          }
        },
      })}>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Fitness'} component={Fitness} />
      <Tab.Screen name={'Sports'} component={Sports} />
      <Tab.Screen name={'Store'} component={Store} />
      <Tab.Screen name={'Social'} component={Social} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
