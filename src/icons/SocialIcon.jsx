import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
const SocialIcon = ({...props}) => {
  return <Icon name={'people'} size={24} {...props} />;
};

export default SocialIcon;
