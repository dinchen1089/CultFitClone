import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const ConnectedImageText = ({icon, text, path, showLine = true}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 250,
        width: '100%',
      }}>
      <View style={{flex: 3, alignItems: 'center'}}>
        <LinearGradient
          colors={['#00ff00', '#FFFF00', '#00ffff']}
          style={{
            padding: 3,
            borderRadius: 100,
          }}>
          <View
            style={{
              borderRadius: 100,
              backgroundColor: '#151424',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(225,225,225,0.5)',
                padding: 5,
                margin: 5,
                borderRadius: 100,
              }}>
              {icon}
            </View>
          </View>
        </LinearGradient>
        <View style={{flex: 1}}>
          {showLine && (
            <LinearGradient colors={['#00ff00', '#FFFF00', '#00ffff']}>
              <View style={{flex: 1, width: 4}}></View>
            </LinearGradient>
          )}
        </View>
      </View>
      <View style={{flex: 15}}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '600',
            marginBottom: 10,
          }}>
          {text}
        </Text>

        <Image
          source={path}
          style={{height: 150, width: '100%', borderRadius: 10}}
          resizeMode={'cover'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ConnectedImageText;
