import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const WhatsAppIcon = ({...props}) => {
  return <Icon name={'whatsapp'} size={24} {...props} />;
};

const styles = StyleSheet.create({});

export default WhatsAppIcon;
