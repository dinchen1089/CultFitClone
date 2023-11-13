import {memo} from 'react';
import {Text, View} from 'react-native';

const HeadingComponent = ({text}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: '#fff',
          marginStart: 10,
          marginVertical: 30,
        }}>
        {text}
      </Text>
    </View>
  );
};

export const Heading = memo(HeadingComponent);
