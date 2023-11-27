import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const MealIcon = ({...props}) => {
  return <Icon name={'fast-food-outline'} size={24} {...props} />;
};

const styles = StyleSheet.create({});

export default MealIcon;
