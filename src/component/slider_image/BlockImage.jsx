import {View, StyleSheet, ImageBackground, Text, Pressable} from 'react-native';
import BlockButton from './BlockButton';
import RoundButton from './RoundButton';
export const BlockImage = ({
  properties,
  navigation,
  link,
  height,
  width,
  imageStyle,
  ...otherProps
}) => {
  const styles = StyleSheet.create({
    imgContainer: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 0,
      marginHorizontal: 0,
    },
    img: {
      height,
      width,
      paddingHorizontal: 0,
      marginHorizontal: 0,
    },
    bottomText: {
      flex: 3,
      marginHorizontal: 15,
      marginVertical: 10,
      alignSelf: 'center',
      justifyContent: 'flex-end',
    },
    bottomButton: {
      flex: 1,
      alignSelf: 'center',
      justifyContent: 'flex-end',
      alignItems: 'baseline',
    },
  });
  return (
    <View style={styles.imgContainer}>
      <ImageBackground
        resizeMode="contain"
        resizeMethod="scale"
        source={properties.path}
        style={styles.img}
        imageStyle={imageStyle}
        {...otherProps}>
        {properties?.sideButton && (
          <RoundButton properties={properties} navigation={navigation} />
        )}
        {properties?.bottomText && (
          <View style={styles.bottomText}>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                letterSpacing: 2,
                textAlign: 'center',
                fontWeight: '400',
                alignSelf: 'baseline',
              }}>
              {properties?.bottomText}
            </Text>
          </View>
        )}
        {properties?.bottomButton && (
          <View style={styles.bottomButton}>
            <BlockButton properties={properties} navigation={navigation} />
          </View>
        )}
      </ImageBackground>
    </View>
  );
};
