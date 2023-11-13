import {memo} from 'react';
import {Pressable, Text} from 'react-native';

const BasicActionLayoutComponent = ({
  navigation,
  style,
  bottomText,
  Icon,
  onPress,
}) => {
  return (
    <Pressable
      onPress={() => onPress(navigation)}
      style={[
        {
          flex: 1,
          flexDirection: 'column',
          paddingVertical: 15,
          paddingHorizontal: 5,
          marginHorizontal: 3,
          marginVertical: 3,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          borderWidth: 1,
        },
        {...style},
      ]}>
      {Icon}
      <Text
        style={{
          color: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '70%',
        }}>
        {bottomText}
      </Text>
    </Pressable>
  );
};
export const BasicActionLayout = memo(BasicActionLayoutComponent);
