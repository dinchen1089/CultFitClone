import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {cultPassTypoCardData} from '../component_data/cultPassTypeCardData';
import LineIcon from '../icons/LineIcon';
const CultPassTypeCard = ({cardData}) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return (
    <View
      style={[styles.mainContainer, {height: height / 4, width: width - 80}]}>
      <View style={{flex: 1}}>
        <View style={styles.iconTextContainer}>
          <View style={styles.icon} />
          <Text style={styles.status}>{cardData.UPCOMING}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cultpass}>{cardData.CULTPASS}</Text>
          <Text style={styles.cultpassType}>{cardData.CULTPASSTYPE}</Text>
        </View>
        <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 10}}>
          <Text style={styles.expire}>{cardData.EXPIRES}</Text>
          <View
            style={{
              marginTop: 10,
              width: '95%',
              height: 15,
              backgroundColor: '#004d00',
              borderRadius: 8,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  status: {
    color: 'white',
    textTransform: 'uppercase',
    color: 'teal',
    letterSpacing: 1,
    fontSize: 14,
    fontWeight: '800',
    marginLeft: 10,
  },
  icon: {
    height: 15,
    width: 2,
    backgroundColor: 'teal',
  },
  cultpass: {
    color: 'white',
    letterSpacing: 1,
    fontWeight: '800',
    fontSize: 22,
    textTransform: 'lowercase',
    marginRight: 10,
  },
  cultpassType: {
    color: 'white',
    letterSpacing: 1,
    fontWeight: '800',
    fontSize: 22,
    textTransform: 'uppercase',
    flex: 1,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expire: {
    color: 'grey',
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
});

export default CultPassTypeCard;
