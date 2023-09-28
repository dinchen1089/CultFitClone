import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Profile from '../screen/Profile';
import TabNavigator from '../tabnavigator/TabNavigator';
import FitnessReport from '../screen/FitnessReport';
import WebViewScreen from '../screen/WebViewScreen';
import WeeklyReports from '../screen/WeeklyReports';
import FitnessJourney from '../screen/FitnessJourney';

const Stack = createStackNavigator();

const MainComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="TabNavigator">
      <Stack.Screen name="WeeklyReports" component={WeeklyReports} />
      <Stack.Screen name="FitnessJourney" component={FitnessJourney} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
      <Stack.Screen name="FitnessReport" component={FitnessReport} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainComponent;
