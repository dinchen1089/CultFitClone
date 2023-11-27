import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
const StarIcon = ({...props}) => {
  return <Icon name={'stars'} size={24} {...props} />;
};

export default StarIcon;
