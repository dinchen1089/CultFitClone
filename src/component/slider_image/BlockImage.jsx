import {View, StyleSheet, ImageBackground} from 'react-native';
import BlockButton from './BlockButton';
export const BlockImage = ({
  properties,
  navigation,
  link,
  height,
  width,
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
        {...otherProps}>
        {properties?.bottomButton && (
          <View style={styles.bottomButton}>
            <BlockButton properties={properties} navigation={navigation} />
          </View>
        )}
      </ImageBackground>
    </View>
  );
};
