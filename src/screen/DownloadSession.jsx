import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import PageHeader from '../component/PageHeader';
import {English} from '../LocaleData/English';
import DownloadIcon from '../icons/DownloadIcon';

export default function DownloadSession({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <PageHeader title={English.DOWNLOADED_SESSIONS} />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          {English.DOWNLOADED_SESSIONS_LABEL_1}
        </Text>
        {/**TODO: Fixed the spacing after after the download icon */}
        <Text style={[styles.textStyle, styles.spacing]}>
          <Text>{English.DOWNLOADED_SESSIONS_LABEL_2}</Text>
          <DownloadIcon style={styles.iconStyle} />
          <Text>{English.DOWNLOADED_SESSIONS_LABEL_3}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },

  textContainer: {
    padding: 20,
  },
  textStyle: {
    fontSize: 18,
    color: 'black',
    opacity: 0.5,
  },
  iconStyle: {
    fontSize: 18,
    //paddingHorizontal: 5, // Example padding
  },
  spacing: {
    marginTop: 15,
    alignItems: 'center',
  },
});
