import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {additionalBenefits} from '../component_data/storeScreenData';

const AdditionalBenefits = ({item}) => {
  console.log(item);
  return (
    <View
      style={{
        backgroundColor: 'rgba(128,128,128,0.3)',
        alignItems: 'center',
        width: 220,
        padding: 10,
        borderRadius: 10,
        marginRight: 15,
      }}>
      <Image
        source={item.imagePath}
        style={{
          width: 120,
          height: 120,
          borderRadius: 100,
        }}
        resizeMode={'cover'}></Image>
      <Text style={{fontSize: 14, fontWeight: '600', color: 'white'}}>
        {item.header}
      </Text>
      <Text
        style={{
          fontSize: 10,
          fontWeight: '400',
          color: 'white',
          textAlign: 'center',
          opacity: 0.5,
        }}>
        {item.subHeader}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AdditionalBenefits;
