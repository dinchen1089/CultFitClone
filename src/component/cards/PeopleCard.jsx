import {Image, View, Text} from 'react-native';
import {memo} from 'react';
import DotIcon from '../../icons/DotIcon';

const PeopleCardComponent = ({properties, height, width}) => {
  return (
    <View style={{flex: 1, height, width, borderRadius: 100}}>
      <Image
        style={{
          flex: 3,
          height: height / 2,
          width: width,
          margin: 0,
          padding: 0,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
        resizeMode="cover"
        source={properties.path}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginStart: 5,
          marginTop: 10,
        }}>
        <View style={{flex: 4, flexDirection: 'column'}}>
          <View
            style={{
              flex: 1,
              paddingBottom: 0,
              marginBottom: 0,
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 400,
                marginBottom: 0,
                paddingBottom: 0,
              }}>
              {properties.name}
            </Text>
            <DotIcon size={15} style={{alignSelf: 'flex-end'}} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 400,
                color: 'green',
                marginBottom: 0,
                paddingBottom: 0,
              }}>
              {properties.designation}
            </Text>
          </View>
          <View style={{flex: 3, alignItems: 'flex-start'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                fontFamily: 'Roboto',
                color: '#fff',
                textAlignVertical: 'top',
              }}>
              {properties.headline}
            </Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'flex-start'}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: 0.4,
            }}>
            Watch Now
          </Text>
        </View>
      </View>
    </View>
  );
};

export const PeopleCard = memo(PeopleCardComponent);
