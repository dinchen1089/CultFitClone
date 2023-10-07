import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {MY_ACTIVITIES} from '../component_data/myActivitesData';
import ChevronRightIcon from '../icons/ChevronRightIcon';
import PageHeader from '../component/PageHeader';
import {English} from '../LocaleData/English';
import {useNavigation} from '@react-navigation/native';

const NextPageNavigator = ({label, containerStyle}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={containerStyle}
      onPress={() => {
        navigation.navigate('MyActivityChildrenScreen', {
          title: label,
        });
      }}>
      <View style={styles.textIconContainer}>
        <Text>{label}</Text>
        <ChevronRightIcon style={styles.iconStyle} />
      </View>
    </Pressable>
  );
};

const Border = ({borderStyle}) => {
  return <View style={[styles.border, borderStyle]} />;
};

const MyActivity = ({navigation}) => {
  let totalActivites = MY_ACTIVITIES.length;
  return (
    <View style={styles.mainContainer}>
      <PageHeader title={English.MY_ACTIVITIES} />
      {MY_ACTIVITIES.map((label, index) => (
        <View key={index} style={styles.nextpageNavigator}>
          <NextPageNavigator label={label} />
          {index !== totalActivites - 1 && <Border />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  textIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  iconStyle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#ff367e',
  },
  border: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
    opacity: 0.2,
  },

  nextpageNavigator: {paddingHorizontal: 20},
});

export default MyActivity;
