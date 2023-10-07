import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import PageHeader from '../component/PageHeader';
export default function MyActivityChildrenScreen({navigation, route}) {
  const title = route.params.title;
  return (
    <View>
      <PageHeader title={title} />
    </View>
  );
}

const styles = StyleSheet.hairlineWidth;
