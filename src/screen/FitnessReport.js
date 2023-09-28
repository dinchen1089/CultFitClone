import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
import PageHeader from '../component/PageHeader';
import {English} from '../LocaleData/English';
import RightArrowIcon from '../icons/RightArrowIcon';
import {FAQs, activityCardData, faqLink} from '../component_data/activityDate';
import {NativeScreen} from 'react-native-screens';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FitnessReport = ({navigation}) => {
  let width = Dimensions.get('window').width;
  let padding = 20;
  let cardWidth = (width - 20) / 2 - 15;
  let cardHeight = 100;

  const FAQCard = ({data, index}) => {
    console.log(data.url, navigation);
    return (
      <Pressable
        key={index}
        onPress={() => {
          console.log('+++++++++++++++++++++++++++++++++++++++');
          navigation.navigate('WebViewScreen', {
            uri: data.url,
          });
        }}>
        <View
          style={{
            width: cardWidth,
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
            height: 85,
          }}>
          <Text style={styles.faqCardTitle}>{data.title}</Text>
          <Text style={styles.faqCardAnswer}>{data.answers}</Text>
        </View>
      </Pressable>
    );
  };

  const ActivityCard = ({data}) => {
    let activeCardWidth = width - 20 - 80;
    console.log(data);

    const InfoComponent = ({
      label,
      value,
      labelStyle,
      valueStyle,
      containerStyle,
    }) => {
      return (
        <View style={[containerStyle]}>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
          <Text style={[styles.value, valueStyle]}>{value}</Text>
        </View>
      );
    };
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('WeeklyReports');
        }}>
        <View
          style={{
            backgroundColor: '#f5f5f5',
            padding: 20,
            borderRadius: 10,
            width: activeCardWidth,
            marginRight: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text>
              <Text style={styles.daytext}>{data.startDay} </Text>
              <Text style={styles.dateText}>{data.startMonthDate} </Text>
              <Text style={styles.dateText}> - </Text>
              <Text style={styles.daytext}>{data.endDay} </Text>
              <Text style={styles.dateText}>{data.endMonthDate}</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <InfoComponent
              label={data.classAttendedLabel}
              value={data.totalClassAttended}
              labelStyle={{color: '#FF8383'}}
              valueStyle={{}}
              containerStyle={{width: '50%'}}
            />
            <InfoComponent
              label={data.caloriesBurntLabel}
              value={data.totalCaloriesBurnt}
              labelStyle={{color: '#FFA557'}}
              valueStyle={{}}
              containerStyle={{width: '50%'}}
            />
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <PageHeader title={English.MY_ACTIVITY} />
      <View style={{paddingHorizontal: 25}}>
        <View style={styles.headerIconContainer}>
          <Text style={styles.headerText}>{English.YOUR_FITNESS_JOUNEY}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FitnessJourney');
            }}>
            <RightArrowIcon style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.subHeaderText}>{English.FTNESS_PROGRESS}</Text>
      </View>
      <View
        style={{
          padding: 20,
        }}>
        <FlatList
          data={activityCardData}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(_, index) => String(index)}
          renderItem={({item}) => <ActivityCard data={item} />}
        />
      </View>
      <View style={{paddingHorizontal: 25}}>
        <Text style={styles.headerText}>{English.YOUR_MEMBERSHIP}</Text>
        <View style={styles.headerIconContainer}>
          <Text style={styles.headerText}>{English.FAQS}</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('WebViewScreen', {
                uri: faqLink,
              });
            }}>
            <RightArrowIcon style={[styles.iconStyle, {color: 'black'}]} />
          </Pressable>
        </View>
      </View>
      <View
        style={{
          padding: 20,
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {FAQs.map((data, index) => (
          <FAQCard data={data} index={index} key={index} />
        ))}
      </View>
    </View>
  );
};

export default FitnessReport;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 22,
    fontWeight: '800',
    color: 'black',
    paddingRight: 10,
    maxWidth: '85%',
  },
  headerIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconStyle: {
    color: '#ff367e',
    fontSize: 30,
    fontWeight: '9000',
  },
  subHeaderText: {
    width: '90%',
    fontSize: 15,
    color: 'black',
    opacity: 0.7,
  },

  faqCardTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  faqCardAnswer: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
  },
  daytext: {
    fontSize: 14,
    color: 'black',
  },
  dateText: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    flexWrap: 'wrap',
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    flexWrap: 'wrap',
  },
});
