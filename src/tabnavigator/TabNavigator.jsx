import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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

import ROUTES from '../LocaleData/routes';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const HiddenNavBarScreens = ['StoreNavigator'];

  const HideBottomNavBar = route => {
    console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    console.log(routeName, HiddenNavBarScreens.includes(routeName));
    if (HiddenNavBarScreens.includes(routeName)) {
      return {display: 'none'};
    }
    return;
  };
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
          colour = focused ? 'white' : 'gray';
          switch (route.name) {
            case ROUTES.FITNESS:
              return <FitnessIcon color={colour} size={22} />;
            case ROUTES.HOME:
              return <HomeIcon color={colour} size={22} />;
            case ROUTES.SOCIAL:
              return <SocialIcon color={colour} size={22} />;
            case ROUTES.SPORTS:
              return <SportsIcon color={colour} size={22} />;
            case ROUTES.STORE:
              return <StoreIcon color={colour} size={22} />;
            default:
              return;
          }
        },
      })}>
      <Tab.Screen name={ROUTES.HOME} component={Home} />
      <Tab.Screen name={ROUTES.FITNESS} component={Fitness} />
      <Tab.Screen name={ROUTES.SPORTS} component={Sports} />
      <Tab.Screen
        name={ROUTES.STORE}
        component={Store}
        options={({route}) => ({
          tabBarStyle: {display: 'none'},
        })}
      />
      <Tab.Screen name={ROUTES.SOCIAL} component={Social} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
