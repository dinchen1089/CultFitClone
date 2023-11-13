import {View, FlatList, StyleSheet} from 'react-native';
import {useRef, useState} from 'react';
import {ImageWithTextOverlay} from './ImageWithTextOverlay';
//id must be a unique number
export const ImageWithOverlayList = ({
  list,
  id,
  navigation,
  height,
  width,
  imageStyle = {},
  seperatorComponent = null,
  animated = true,
}) => {
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
        ItemSeparatorComponent={({item}) => {
          if (seperatorComponent) {
            return seperatorComponent;
          }
        }}
        renderItem={({item, index}) => {
          return (
            <ImageWithTextOverlay
              key={index}
              properties={item}
              imageStyle={imageStyle}
              height={height ? height : 200}
              width={width ? width : 200}
              navigation={navigation}
            />
          );
        }}
      />
      {list.length > 1 && animated && (
        <BottomSlider
          key={key}
          setKey={setKey}
          style={{marginTop: 10, alignSelf: 'center'}}
          listRef={listRef}
          list={list}
        />
      )}
    </View>
  );
};
