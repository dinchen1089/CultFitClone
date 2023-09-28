import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import ChevronRightIcon from '../icons/ChevronRightIcon';

const PageNavigator = ({
  leftlabel,
  rightlabel,
  showBorder = true,
  showIcon,
  iconStyle,
  componentName,
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (componentName) navigation.navigate(componentName);
  };
  return (
    <Pressable style={styles.mainContainer} onPress={handlePress}>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.leftLabel}>{leftlabel}</Text>
          {rightlabel && <Text style={styles.rightLabel}>{rightlabel}</Text>}
          {showIcon && <ChevronRightIcon style={styles.icon} />}
        </View>
        {showBorder && (
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: 'white',
              opacity: 0.2,
              marginVertical: 15,
            }}
          />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  leftLabel: {
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
  },
  rightLabel: {fontSize: 14, fontWeight: '300', color: 'white'},
  icon: {
    fontSize: 25,
    fontWeight: '400',
    color: 'white',
    height: '100%',
  },

  textContainer: {
    flexDirection: 'row',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainContainer: {
    width: '100%',
    backgroundColor: 'black',
    marginVerical: 40,
  },
});

export default PageNavigator;
