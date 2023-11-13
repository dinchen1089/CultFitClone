import {Image, View, Text} from 'react-native';
import PlayIcon from '../icons/PlayIcon';

export const RecipeListCard = ({properties}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        padding: 8,
        margin: 7,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'rgba(112, 128, 144, 0.2)',
      }}>
      <Image
        style={{height: 70, width: 70, borderRadius: 5, alignSelf: 'center'}}
        source={properties.path}
      />
      <View
        style={{
          flexDirection: 'column',
          flex: 3,
          margin: 10,
          justifyContent: 'flex-start',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bold',
            paddingStart: 5,
            width: '75%',
          }}>
          {properties.heading}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 5,
            margin: 0,
          }}>
          <PlayIcon size={25} />
          <Text style={{color: 'rgba(112, 128, 144, 0.2)'}}>
            {properties.text}
          </Text>
        </View>
      </View>
    </View>
  );
};
