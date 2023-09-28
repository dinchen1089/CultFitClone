import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import PageHeader from '../component/PageHeader';
import WebViewComponent from '../component/WebviewComponent';
const WebViewScreen = ({route, navigations}) => {
  const uri = route.params.uri;

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <PageHeader title="" containerStyle={{backgroundColor: 'white'}} />
      <WebViewComponent uri={uri} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default WebViewScreen;
