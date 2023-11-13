import {Pressable, Text, StyleSheet, View} from 'react-native';

export default RoundButton = ({properties, navigation}) => {
  const styles = StyleSheet.create({
    roundButton: {
      height: 50,
      width: 50,
      backgroundColor: 'rgba(178, 190, 181, 0.4)',
      marginBottom: 20,
      borderRadius: 1000,
    },
    roundButtonText: {
      color: '#000',
      alignSelf: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingStart: 10,
    },
  });

  return (
    <View style={styles.container}>
      {properties?.sideText && (
        <View
          style={{
            marginTop: 30,
            width: '50%',
            flexDirection: 'column',
            alignSelf: 'flex-start',
            flex: 1 / 3,
          }}>
          {properties?.sideText?.heading && (
            <Text style={{...properties?.sideText?.heading?.style}}>
              {properties?.sideText?.heading?.text}
            </Text>
          )}
          {properties?.sideText?.subHeading && (
            <Text style={{...properties?.sideText?.subHeading?.style}}>
              {properties?.sideText?.subHeading?.text}
            </Text>
          )}
        </View>
      )}
      <View
        style={{
          flex: 1 / 3,
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <Pressable
          style={styles.roundButton}
          onPress={() => {
            properties?.sideButton?.onPress(navigation);
          }}>
          <Text style={styles.roundButtonText}>
            {properties?.sideButton?.text}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
