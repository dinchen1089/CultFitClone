import {
  View,
  FlatList,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {useRef, useState} from 'react';
import {BlockImage} from './BlockImage';
import {BottomSlider} from './bottomSlider';

//id must be a unique number
export const ImageList = ({list, id, navigation}) => {
  const {height, width} = useWindowDimensions();
  const [key, setKey] = useState(id);
  const listRef = useRef(null);
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      marginTop: 0,
    },
    imageSection: {
      flex: 6,
      marginHorizontal: 0,
      paddingHorizontal: 0,
    },
    sliderSection: {
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        style={styles.imageSection}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={true}
        ref={listRef}
        renderItem={({item, index}) => {
          return (
            <BlockImage
              key={index}
              properties={item}
              height={height / 1.6}
              width={width}
              navigation={navigation}
            />
          );
        }}
      />
      <BottomSlider
        key={key}
        setKey={setKey}
        style={{marginTop: 10, alignSelf: 'center'}}
        listRef={listRef}
        list={list}
      />
    </View>
  );
};
