import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import {AllReviews} from '../component_data/storeScreenData';
import StarIcon from '../icons/Star';

const width = Dimensions.get('window').width * 0.8;

const ReviewCard = ({item}) => {
  return (
    <View
      style={{
        width: width,
        backgroundColor: 'rgba(128,128,128,0.4)',
        margin: 10,
        padding: 10,
        borderRadius: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Avatar imagePath={item.imagePath} name={item.name} />
        <View style={{marginLeft: 10, flex: 1}}>
          <Text
            style={{color: 'white', fontSize: 16, fontWeight: '600'}}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.name}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'white', marginRight: 5, fontSize: 12}}>
              {item.rating}
            </Text>
            <StarIcon
              style={{
                color: '#FFC000',
                fontSize: 18,
                marginRight: 5,
              }}></StarIcon>
            <View
              style={{
                width: 5,
                height: 5,
                borderRadius: 10,
                marginRight: 5,
                backgroundColor: 'rgba(128,129,128,0.5)',
              }}></View>
            <Text
              style={{
                color: 'rgba(128,129,128,0.5)',
                marginRight: 5,
                fontSize: 12,
              }}>
              {item.reviewDate} days to go
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{color: 'white', fontSize: 14, fontStyle: 'italic'}}
          numberOfLines={5}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default ReviewCard;
