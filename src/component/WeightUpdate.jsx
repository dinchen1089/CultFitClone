import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {weightStatus} from '../component_data/storeScreenData';
import LinearGradient from 'react-native-linear-gradient';
export default function WeightUpdate({item}) {
  console.log(item);
  return (
    <View
      style={{
        height: 300,
        width: 300,
        borderRadius: 20,
        overflow: 'hidden',
        margin: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            source={item.beforeImage}
            style={{height: 250, width: 150}}
            resizeMode="cover"></Image>

          <LinearGradient
            colors={['transparent', '#fcba03']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}
            style={{
              position: 'absolute',
              bottom: 10,
              left: 0,
            }}
            locations={[0.1, 0.7]}>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontWeight: '700',
                paddingHorizontal: 10,
              }}>
              Day {item.startDay}
            </Text>
          </LinearGradient>
        </View>
        <View style={{height: 250, width: 150}}>
          <Image
            source={item.afterImage}
            style={{height: 250, width: 150}}
            resizeMode="cover"></Image>
          <LinearGradient
            colors={['transparent', '#fcba03']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              position: 'absolute',
              bottom: 10,
              right: 0,
            }}
            locations={[0.1, 0.7]}>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontWeight: '700',
                paddingHorizontal: 10,
              }}>
              Day {item.endDay}
            </Text>
          </LinearGradient>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nameStyle}>~{item.name}~</Text>
        <Text style={styles.lossedWeightStyle}>
          Lost {item.weightLossed} KGS
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e2c28',
  },
  nameStyle: {
    color: 'white',
    fontSize: 12,
  },
  lossedWeightStyle: {
    color: 'white',
    fontSize: 18,
  },
});
