import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ImageList} from '../component/slider_image/ImageList';
import {HomeImageMap} from '../images/imageMap';
const Home = ({navigation}) => {
  const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: '#000',
    },
  });
  return (
    <ScrollView style={styles.page}>
      <ImageList list={Object.values(HomeImageMap)} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text>Go To Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
