import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import BlockButton from '../slider_image/BlockButton';
export const ImageWithTextOverlay = ({
  properties,
  navigation,
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
      justifyContent: 'center',
      alignItems: 'center',
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
        imageStyle={imageStyle}
        {...otherProps}>
        <View
          style={{
            height: height - 6,
            width: width - 6,
            borderRadius: 10,
            alignSelf: 'center',
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}>
          <Text style={{alignSelf: 'baseline'}}>{properties.heading}</Text>
          {properties?.bottomButton && (
            <View style={styles.bottomButton}>
              <BlockButton properties={properties} navigation={navigation} />
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};
