import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WebViewComponent from '../component/WebviewComponent';
import {StatusBar} from 'react-native';
const Store = () => {
  return (
    <View style={{flex: 1, marginTop: 25}}>
      <StatusBar />
      <WebViewComponent uri={'https://cultsport.com/'} />
    </View>
  );
};
export default Store;
