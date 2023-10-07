import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Social = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Social</Text>
    </View>
  );
};

export default Social;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'radial-gradient(#FF5733, #FFC300)', // Use CSS-like gradient syntax
  },
});
