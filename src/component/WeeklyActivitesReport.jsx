import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {weekActivities} from '../component_data/storeScreenData';

const WeeklyActivitesReport = ({item}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 80,
          overflow: 'hidden',
          backgroundColor: 'rgba(128,128,128,0.2)',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            height: '100%',
            width: 65,
            backgroundColor: 'rgba(128,128,128,0.2)',
          }}>
          {item.day === 1 && (
            <Text style={styles.dayStyle}>{item.day === 1 ? 'DAY' : ''}</Text>
          )}
          <Text style={styles.dayStyle}>{item.day}</Text>
        </View>
        <View
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            margin: 0,
            borderWidth: 0,
            borderColor: 'red',
          }}>
          <View
            style={{
              height: '80%',
              width: 3,
              alignSelf: 'center',
              backgroundColor: 'green',
              borderRadius: 6,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 7,
            height: '100%',
            padding: 10,
            width: 20,
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.headerStyle}>{item.header}</Text>
            <Text style={styles.subHeaderStyle}>{item.subHeader}</Text>
          </View>
          <View style={styles.iconContainer}>{item.icon}</View>
        </View>
      </View>

      {item.day !== 7 && (
        <View
          style={{
            height: 1,
            backgroundColor: 'rgba(128,128,128,.36)',
            width: '100%',
          }}
        />
      )}
    </>
  );
};

export default WeeklyActivitesReport;

const styles = StyleSheet.create({
  dayStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },

  headerStyle: {
    color: 'white',
    opacity: 0.4,
    fontSize: 12,
    fontWeight: '600',
  },

  subHeaderStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
  iconContainer: {
    height: 45,
    width: 45,
    borderRadius: 100,
    backgroundColor: 'rgba(128,128,128,0.2)',
    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },
});
