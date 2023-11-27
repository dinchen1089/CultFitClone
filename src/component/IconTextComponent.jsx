import {View, Text} from 'react-native';
import React from 'react';

export default function IconTextComponent({
  icon = '',
  text,
  width = '100%',
  containerStyle = {},
  textStyle = {},
}) {
  return (
    <View style={[{alignItems: 'center', width: width}, containerStyle]}>
      {icon}
      <Text
        style={[
          {color: 'white', fontSize: 10, textAlign: 'center'},
          textStyle,
        ]}>
        {text}
      </Text>
    </View>
  );
}
