import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const StarIcon = ({...props}) => {
  return <Icon name={'star'} size={24} {...props} />;
};

export default StarIcon;
