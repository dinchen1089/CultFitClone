import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import PageHeader from '../component/PageHeader';
import {English} from '../LocaleData/English';
const FitnessJourney = () => {
  const TextNumberCard = ({index, character, text}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingRight: 10,
          }}>
          <Text style={styles.character}>{character}</Text>
          <Text style={styles.character}>{index}</Text>
        </View>
        <Text style={[styles.label1, {letterSpacing: 1, lineHeight: 20}]}>
          {text}
        </Text>
      </View>
    );
  };
  return (
    <View style={{width: '100%', height: '100%'}}>
      <PageHeader
        title={English.WEEKLY_REPORTS}
        containerStyle={{backgroundColor: 'white'}}
      />
      <ScrollView>
        <View style={styles.emojiTextContainer}>
          <Text style={styles.emoji}>🥲</Text>
          <Text style={styles.zeroClassText}>{English.ITS_ALREADY_MONTH}</Text>
        </View>
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.label1}>{English.LAST_CLASS_TEXT}</Text>
        </View>
        <View style={{padding: 25, backgroundColor: 'white'}}>
          <TextNumberCard
            index={1}
            character={'#'}
            text={English.FITNESS_TEXT_LABEL_1}
          />
          <View
            style={{
              height: 40,
              width: 4,
              marginLeft: 15,
              backgroundColor: '#e76180',
              justifyContent: 'center',
            }}
          />
          <TextNumberCard
            index={2}
            character={'#'}
            text={English.FITNESS_TEXT_LABEL_2}
          />
        </View>
        <View style={{padding: 20, backgroundColor: '#f3f4f8'}}>
          <View
            style={{
              height: 6,
              backgroundColor: '#73bbfe',
              width: 50,
              marginBottom: 10,
            }}
          />
          <Text style={styles.backonTrackText}>
            {English.GET_BACK_ON_TRACK}
          </Text>
          <Text style={[styles.backonTrackText, {opacity: 0.5}]}>
            {English.BE_FEAR_LESS}
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btnStyle}>
        <Text style={styles.btnText}>{English.BOOK_A_CLASS}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FitnessJourney;

const styles = StyleSheet.create({
  emojiTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffeded',
    width: '100%',
    padding: 25,
  },
  emoji: {
    fontSize: 50,
    color: 'yellow',
    paddingRight: 20,
  },
  zeroClassText: {
    textTransform: 'uppercase',
    fontSize: 23,
    fontWeight: '800',
    flexWrap: 'wrap',
    width: '70%',
    color: '#ef7d79',
  },
  label1: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    opacity: 0.5,
    paddingTop: 10,
    paddingHorizontal: 25,
  },
  character: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
    opacity: 0.2,
  },

  backonTrackText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#707271',
    opacity: 0.9,
    width: '70%',
  },
  btnStyle: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: '85%',
    backgroundColor: '#ff3277',
    padding: 12,
    alignItems: 'center',
    borderRadius: 300,
  },
  btnText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: '700',
  },
});
