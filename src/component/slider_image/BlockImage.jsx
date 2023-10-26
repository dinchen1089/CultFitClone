import {View, Image, StyleSheet} from 'react-native';

export const BlockImage = ({
  size = {height: 400, width: 400},
  path,
  ...otherProps
}) => {
  const styles = StyleSheet.create({
    imgContainer: {
      flex: 1,
      paddingHorizontal: 1,
      width: '100%',
      alignSelf: 'center',
      alignItems: 'center',
    },
    img: {
      ...size,
    },
  });
  return (
    <View style={styles.imgContainer}>
      <Image
        resizeMode="contain"
        resizeMethod="scale"
        source={path}
        style={styles.img}
        {...otherProps}
      />
    </View>
  );
};
