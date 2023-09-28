import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

const WebViewWithLoadingIndicator = ({uri}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: uri}}
        startInLoadingState={true}
        onError={error => console.error('WebView error:', error)}
        style={{flex: isLoading ? 0 : 1}}
      />
    </View>
  );
};

export default WebViewWithLoadingIndicator;
