import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
  Pressable,
} from 'react-native';

import {useState, useRef, useEffect} from 'react';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';
import React from 'react';
import {English} from '../LocaleData/English';

import PersonIcon from '../icons/PersonIcon';
import LocationIcon from '../icons/LocationIcon';

import CultPassTypeCard from '../component/CultPassTypeCard';
import {cultPassTypoCardData} from '../component_data/cultPassTypeCardData';
import DotIcon from '../icons/DotIcon';
import PageNavigator from '../component/PageNavigator';
import {Animated} from 'react-native';

import {
  activityRecord,
  accountSettings,
  fitnessDevices,
  orders,
  cultPassCORP,
  referralVoucherGiftCard,
  support,
} from './../component_data/DropDownText';

const populateCoordinatesForScrolling = (
  FormFieldLayout,
  setter,
  elemName,
  elemRef,
) => {
  if (!Object.keys(FormFieldLayout).includes(elemName)) {
    elemRef.current &&
      elemRef.current.measure((x, y, width, height, pageX, pageY) => {
        let yCoordinate = pageY + height / 5;
        if (elemName !== 'ScrollView') {
          yCoordinate = pageY;
        }
        setter(prev => {
          return {
            ...prev,
            [elemName]: {
              x: 0,
              y: yCoordinate,
            },
          };
        });
      });
  }
};
const scrollHelper = (skip, ref, FormFieldLayout, elem) => {
  ref.current.scrollTo({
    x: FormFieldLayout[elem].x,
    y: FormFieldLayout[elem].y - FormFieldLayout.ScrollView.y,
    animated: true,
  });
  return;
};

const initialState = {
  ACTIVITY_RECORD: false,
  ACTIVITY_SETTNG: false,
  FITNESS_DEVICES: false,
  REFERRAL_VOUCHER: false,
};
const Profile = ({navigation}) => {
  const [isCardExpanded, setCardExpanded] = useState(initialState);
  const [FormFieldLayout, setFormFieldLayout] = useState({});
  const scrollViewRef = useRef(null);
  const translateY = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 100, // Adjust the desired translation value
      duration: 300, // Animation duration in milliseconds
      useNativeDriver: false,
    }).start();
  }, [isCardExpanded]);
  const handleCardExpanded = cardType => {
    if (!isCardExpanded[cardType] && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({y: 50 * 5, animated: true});
    }
    setCardExpanded({
      ...initialState,
      [cardType]: !isCardExpanded[cardType],
    });
  };

  const Card = ({cardData, containerStyle = {}, ...props}) => {
    return (
      <View style={[{marginBottom: 15}, containerStyle]}>
        <Text style={styles.header}>{cardData.header}</Text>
        <View style={styles.cardContainer}>
          {cardData.subheader.map((item, index) => (
            <View style={styles.cardTextContainer} key={index}>
              <Text style={styles.cardText}>{item}</Text>
              {index !== cardData.subheader.length - 1 && (
                <DotIcon style={styles.cardIconContainer} />
              )}
            </View>
          ))}
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <StatusBar
        backgroundColor={'black'}
        barStyle={'light-content'}></StatusBar>
      <ScrollView
        ref={scrollViewRef}
        // onLayout={e => {
        //   populateCoordinatesForScrolling(
        //     FormFieldLayout,
        //     setFormFieldLayout,
        //     'ScrollView',
        //     scrollViewRef,
        //   );
        // }}
      >
        <Text style={styles.name}> {English.NAME}</Text>
        <View style={styles.labelIconMainContainer}>
          <View style={styles.labelIconContainer}>
            <PersonIcon color="white" style={styles.labelIcon} />
            <Text style={styles.label}>{English.VIEW_PROFILE}</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.labelIconContainer}>
            <LocationIcon color="white" style={styles.labelIcon} />
            <Text style={styles.label}>{English.LOCATION}</Text>
          </View>
        </View>
        <FlatList
          horizontal={true}
          data={cultPassTypoCardData}
          contentContainerStyle={{padding: 10}}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => <CultPassTypeCard cardData={item} />}
        />
        <View
          style={{
            padding: 20,
            width: '100%',
          }}
          // onLayout={e => {
          //   populateCoordinatesForScrolling(
          //     FormFieldLayout,
          //     setFormFieldLayout,
          //     'View',
          //     scrollViewRef,
          //   );
          // }}
        >
          <Pressable
            onPress={() => {
              handleCardExpanded('ACTIVITY_RECORD');
            }}>
            <Card cardData={activityRecord} />
          </Pressable>
          {isCardExpanded['ACTIVITY_RECORD'] === true && (
            <View>
              <PageNavigator
                leftlabel={English.FITNESS_REPORTS}
                showIcon={true}
                componentName={'FitnessReport'}
              />
              <PageNavigator
                leftlabel={English.LEVEL_AND_BADGES}
                showIcon={true}
              />
              <PageNavigator
                leftlabel={English.LATEST_WEIGHT}
                showIcon={true}
              />
              <PageNavigator leftlabel={English.LATEST_BMI} showIcon={true} />
              <PageNavigator leftlabel={English.CHALLANGES} showIcon={true} />
              <PageNavigator leftlabel={English.MYHISTORY} showIcon={true} />
              <PageNavigator
                leftlabel={English.DOWNLOADED_SESSIONS}
                showIcon={true}
              />
            </View>
          )}

          <Pressable
            onPress={() => {
              handleCardExpanded('ACTIVITY_SETTNG');
            }}>
            <Card cardData={accountSettings} />
          </Pressable>
          {isCardExpanded['ACTIVITY_SETTNG'] === true && (
            <View>
              <PageNavigator
                leftlabel={English.NOTIFICATION_PREFERANCE}
                showIcon={true}
              />
              <PageNavigator
                leftlabel={English.CLASS_CALENDAR}
                showIcon={true}
              />
              <PageNavigator
                leftlabel={English.CALL_REMINDER}
                showIcon={true}
              />
              <PageNavigator leftlabel={English.ADDRESS} showIcon={true} />
              <PageNavigator
                leftlabel={English.CONTACT_DETAILS}
                showIcon={true}
              />
              <PageNavigator leftlabel={English.PAYMENTS} showIcon={true} />
              <PageNavigator
                leftlabel={English.LOGGED_IN_DEVICES}
                showIcon={true}
              />
              <PageNavigator leftlabel={English.LOGOUT} showIcon={true} />
            </View>
          )}
          <Pressable
            onPress={() => {
              handleCardExpanded('FITNESS_DEVICES');
            }}>
            <Card cardData={fitnessDevices} />
          </Pressable>
          {isCardExpanded['FITNESS_DEVICES'] === true && (
            <View>
              <PageNavigator leftlabel={English.GOOGLE_FIT} showIcon={true} />
              <PageNavigator leftlabel={English.FITBIT} showIcon={true} />
              <PageNavigator
                leftlabel={English.CONNECT_CULTROW}
                showIcon={true}
              />
              <PageNavigator leftlabel={English.CONNECT_TV} showIcon={true} />
            </View>
          )}

          <Card cardData={orders} />
          <Card cardData={cultPassCORP} />
          <Pressable
            onPress={() => {
              handleCardExpanded('REFERRAL_VOUCHER');
            }}>
            <Card cardData={referralVoucherGiftCard} />
          </Pressable>
          {isCardExpanded['REFERRAL_VOUCHER'] === true && (
            <View>
              <PageNavigator leftlabel={English.REFER_FRIEND} showIcon={true} />
              <PageNavigator leftlabel={English.MY_REFERRALS} showIcon={true} />
              <PageNavigator
                leftlabel={English.REDEEM_VOUCHER}
                showIcon={true}
              />
              <PageNavigator
                leftlabel={English.REDEEM_VOUCHER}
                showIcon={true}
              />
              <PageNavigator
                leftlabel={English.REDEEM_GIFT_CARD}
                showIcon={true}
              />
            </View>
          )}

          <Card cardData={support} />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}
        style={styles.topButton}>
        <ChevronLeftIcon size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    color: 'white',
  },
  topButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    backgroundColor: 'transparent',
  },
  name: {
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: '600',
    letterSpacing: 1,
    fontSize: 28,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  labelIconMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  labelIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    height: 20,
    backgroundColor: 'grey',
    width: 2,
  },
  label: {
    color: 'white',
    marginLeft: 5,
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  labelIcon: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '800',
  },
  header: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  subHeaderText: {
    color: 'grey',
  },
  cardContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIconContainer: {
    color: 'grey',
    fontSize: 20,
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
  cardText: {
    color: 'grey',
    fontSize: 14,
  },
  cardTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Profile;
