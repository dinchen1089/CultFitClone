import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {View, StyleSheet, Pressable, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const PressableImageTextCard = () => {
  return (
    <Pressable style={styles.pressableContainer}>
      <View style={styles.cardContainer}>
        <Image
          source={require('../images/social_images/standing.jpg')}
          resizeMode={'cover'}
          style={styles.image}
        />
        {/** TODO add a blurr between Image and view and the blur should be extended till half of image */}
        <View style={styles.textContainer}>
          <Text style={styles.introText}>INTRODUCING</Text>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>BOOTCAMP</Text>
            <Text style={styles.subtitleText}>OUTDOOR</Text>
          </View>
          <Text style={styles.descriptionText}>
            {'Workouts based on Sports\nconditioning'}
          </Text>
          <Pressable
            style={{
              marginTop: 10,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
                backgroundColor: 'rgba(128,128,128,0.3)',
              }}>
              EXPLORE NOW
            </Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressableContainer: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'rgba(128,128,128,.2)',
    borderRadius: 10,
    marginBottom: 30,
    // Add any additional styles for the Pressable container
  },
  cardContainer: {
    flexDirection: 'row',
  },
  image: {
    height: '100%',
    width: 80,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    padding: 10,
  },
  introText: {
    color: 'white',
    fontSize: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  titleText: {
    fontSize: 20,
    color: 'rgba(30,255,40,1)',
  },
  subtitleText: {
    borderWidth: 2,
    borderTopColor: 'white',
    borderBottomColor: 'white',
    color: 'white',
    fontSize: 16,
  },
  descriptionText: {
    fontSize: 12,
    color: 'white',
  },
});

export default PressableImageTextCard;
