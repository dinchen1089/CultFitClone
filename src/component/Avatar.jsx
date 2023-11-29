import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Avatar = ({name, imagePath}) => {
  return (
    <View>
      {imagePath ? (
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
          }}
          resizeMode="cover"
          source={imagePath}></Image>
      ) : (
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: '#FF5733',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '400',
              color: 'white',
            }}>
            {name[0].toUpperCase()}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
