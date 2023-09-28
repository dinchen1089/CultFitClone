import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';

const PageHeader = ({title, onBackPress, containerStyle}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.goBack();
    onBackPress?.();
  };
  return (
    <View style={[styles.header, containerStyle]}>
      <TouchableOpacity onPress={handlePress} style={styles.backButton}>
        <ChevronLeftIcon style={styles.iconStyle} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = {
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  backButton: {
    marginRight: 5,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    color: 'black',
    letterSpacing: 1,
    flexWrap: 'wrap',
    flex: 1,
  },
  iconStyle: {
    color: '#ff367e',
    fontSize: 40,
  },
};

export default PageHeader;
