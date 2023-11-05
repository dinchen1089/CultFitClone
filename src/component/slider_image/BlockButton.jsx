import {Pressable, Text, StyleSheet} from 'react-native';

export default BlockButton = ({properties, navigation}) => {
  const styles = StyleSheet.create({
    blockButton: {
      borderColor: '#fff',
      height: 50,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      marginBottom: 15,
      borderRadius: 5,
    },
    blockButtonText: {
      color: '#fff',
    },
    container: {
      alignSelf: 'center',
      alignItems: 'center',
    },
  });
  return (
    <Pressable
      style={styles.blockButton}
      onPress={() => {
        properties?.bottomButton.onPress(navigation);
      }}>
      <Text style={styles.blockButtonText}>
        {properties?.bottomButton?.text}
      </Text>
    </Pressable>
  );
};
