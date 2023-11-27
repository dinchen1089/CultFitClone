import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
const PersonStandingIcon = ({...props}) => {
  return <Icon name={'person'} size={24} {...props} />;
};

const styles = StyleSheet.create({});

export default PersonStandingIcon;
