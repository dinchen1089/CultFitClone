import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const PersonIcon = ({...props}) => {
  return <Icon name={'person-outline'} size={24} {...props} />;
};

export default PersonIcon;
