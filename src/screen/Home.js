import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {ImageList} from '../component/slider_image/ImageList';
import {HomeImageMap} from '../images/imageMap';
import {ProfileButton} from '../component/ui_helpers/ProfileButton';
const Home = ({navigation}) => {
  const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: '#000',
      padding: 0,
      margin: 0,
    },
  });
  return (
    <ScrollView style={styles.page}>
      <ProfileButton />
      <ImageList
        list={Object.values(HomeImageMap)}
        id={Math.random()}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default Home;
