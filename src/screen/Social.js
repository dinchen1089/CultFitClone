import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ConnectedImageText from '../component/ConnectedImageText';
import IconTextComponent from '../component/IconTextComponent';
import PressableImageTextCard from '../component/PressableImageTextCard';
import WeightUpdate from '../component/WeightUpdate';
import {
  Steps,
  additionalBenefits,
  bookingInfo,
  joinBootCampTextIcon,
  weightStatus,
} from '../component_data/storeScreenData';
import {FlatList} from 'react-native-gesture-handler';
import AdditionalBenefits from '../component/AdditionalBenefits';
import WeeklyActivitesReport from '../component/WeeklyActivitesReport';
import {weekActivities} from '../component_data/storeScreenData';
import CheckCircleIcon from '../icons/CheckCircleIcon';
import EliteCard from '../component/EliteCard';

const Social = () => {
  const {width, height} = Dimensions.get('window');

  let usableWidth = (width - 40) / 3;
  const AtCenterComponent = () => {
    return (
      <View>
        <View
          style={{
            backgroundColor: 'rgba(112, 128, 144, 0.2)',
            alignItems: 'center',
            padding: 20,
            borderRadius: 10,
            margin: 10,
          }}>
          <Text
            style={{
              color: '#f3c682',
              textAlign: 'center',
              fontWeight: '500',
              fontSize: 14,
            }}>
            Are dates Clashing with your NY Plans?
          </Text>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 14,
            }}>
            {'Worry not, we got extra classes to \n keep you on track!'}
          </Text>
        </View>
        <Text
          style={{fontSize: 20, color: 'white', margin: 10, fontWeight: '600'}}>
          Why join the bootcamp
        </Text>
        <View
          style={{
            backgroundColor: 'rgba(112, 128, 144, 0.2)',
            padding: 10,
            flexDirection: 'row',
            margin: 10,
            alignItems: 'center',
            borderRadius: 10,
            justifyContent: 'space-between',
          }}>
          {joinBootCampTextIcon.map(item => (
            <IconTextComponent
              text={item.text}
              icon={item.icon}
              width={usableWidth}
              key={item.id}
            />
          ))}
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <View
            style={{
              height: 2,
              flex: 1,
              backgroundColor: 'white',
              marginRight: 2,
            }}
          />
          <Text style={{color: 'white', fontSize: 20}}>How it works</Text>
          <View
            style={{
              height: 2,
              flex: 1,
              backgroundColor: 'white',
              marginLeft: 2,
            }}
          />
          <View />
        </View>
        <View style={{margin: 10}}>
          {Steps.map((item, index) => (
            <ConnectedImageText
              key={item.id}
              text={item.text}
              path={item.path}
              icon={item.icon}
              showLine={index !== Steps.length - 1}
            />
          ))}
        </View>
        <PressableImageTextCard />
        <Text
          style={{fontSize: 20, color: 'white', margin: 10, fontWeight: '600'}}>
          Real Member. Real Result
        </Text>
        <FlatList
          data={weightStatus}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({item}) => <WeightUpdate item={item} />}
        />
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            margin: 10,
            marginTop: 20,
            fontWeight: '600',
          }}>
          And you'll also get
        </Text>
        <FlatList
          data={additionalBenefits}
          contentContainerStyle={{margin: 10}}
          horizontal
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => <AdditionalBenefits item={item} />}
        />
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            margin: 10,
            marginTop: 20,
            fontWeight: '600',
          }}>
          Here it from out members
        </Text>
        {/* // TODO Add video */}
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            margin: 10,
            marginTop: 20,
            fontWeight: '600',
          }}>
          Snapshot of your week
        </Text>
        <View
          style={{
            borderRadius: 10,
            overflow: 'hidden',
            margin: 10,
          }}>
          {weekActivities.map(item => (
            <WeeklyActivitesReport item={item} key={item.id} />
          ))}
        </View>
        <View style={{margin: 10}}>
          {bookingInfo.map((item, index) => (
            <IconTextComponent
              key={index}
              text={item}
              icon={
                <CheckCircleIcon
                  style={{color: 'white', fontSize: 12, paddingTop: 10}}
                />
              }
              textStyle={{
                textAlign: 'left',
                marginLeft: 10,
                fontSize: 14,
                color: 'white',
                opacity: 0.5,
                flexWrap: 'wrap',
                width: '90%',
                marginTop: 5,
              }}
              containerStyle={{
                flexDirection: 'row',
                flex: 1,
                alignItems: 'flex-start',
              }}
            />
          ))}
        </View>
        <EliteCard />
      </View>
    );
  };
  const [tab, SetTab] = useState({
    CENTER: true,
    HOME: false,
  });
  return (
    <View style={{flex: 1, backgroundColor: '#151424', marginTop: 30}}>
      <StatusBar></StatusBar>
      <Text
        style={{
          color: 'white',
          textAlign: 'right',
          textTransform: 'uppercase',
          marginTop: 10,
          fontSize: 16,
          fontWeight: '600',
        }}>
        Talk to Us
      </Text>
      <Text style={{color: 'white', fontSize: 18, marginHorizontal: 10}}>
        Weight Loss
      </Text>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: StyleSheet.hairlineWidth,
          borderBottomColor: 'rgba(255, 255, 255, 0.5)',
          margin: 10,
        }}>
        <Text
          style={{
            color: 'white',
            borderBottomColor: 'white',
            borderWidth: tab['CENTER'] ? 2 : 0,
            paddingVertical: 10,
          }}
          onPress={() => {
            SetTab(prev => {
              return {
                ...prev,
                CENTER: true,
                HOME: false,
              };
            });
          }}>
          AT-CENTER
        </Text>
        <View style={{width: 30}} />
        <Text
          style={{
            color: 'white',
            borderBottomColor: 'white',
            borderWidth: tab['HOME'] ? 2 : 0,
            paddingVertical: 10,
          }}
          onPress={() => {
            SetTab(prev => {
              return {
                ...prev,
                CENTER: false,
                HOME: true,
              };
            });
          }}>
          AT-HOME
        </Text>
      </View>
      <ScrollView>
        <AtCenterComponent />
      </ScrollView>
    </View>
  );
};

export default Social;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
