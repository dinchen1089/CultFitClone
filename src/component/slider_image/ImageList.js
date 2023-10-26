import {View, FlatList, StyleSheet} from 'react-native';
import {BlockImage} from './BlockImage';
export const ImageList = ({list}) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    imageSection: {
      flex: 6,
    },
    sliderSection: {
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        horizontal={true}
        renderItem={({item, index}) => {
          return <BlockImage key={index} path={item.path} />;
        }}
      />
    </View>
  );
};
