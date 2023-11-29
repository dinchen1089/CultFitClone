import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HollowStar from '../icons/HollowStar';
import {eliteData} from '../component_data/storeScreenData';

export default function EliteCard() {
  return (
    <View
      style={{
        backgroundColor: 'rgba(128,128,128,0.4)',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
      }}>
      <View style={{marginRight: 10}}>
        <HollowStar style={styles.iconStyle} />
        <Text style={styles.typeText}>{eliteData.type}</Text>
      </View>
      <View style={{flex: 1, marginRight: 36}}>
        <Text style={styles.headerStyle}>{eliteData.header}</Text>
        <Text style={styles.subheaderStyle}>{eliteData.subHeader}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 56,
    color: '#BF9B30',
  },
  typeText: {
    color: '#BF9B30',
    fontSize: 18,
    fontWeight: '800',
  },
  headerStyle: {
    fontSize: 13,
    fontWeight: '800',
    color: 'white',
    fontWeight: '500',
    marginBottom: 5,
  },
  subheaderStyle: {
    fontSize: 13,
    fontWeight: '800',
    color: 'white',
    opacity: 0.8,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
});
