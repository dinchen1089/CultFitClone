import {Pressable, Text, StyleSheet} from 'react-native';

export default BlockButton = ({properties, navigation}) => {
  const styles = StyleSheet.create({
    blockButton: {
      height: 50,
      backgroundColor: 'rgba(178, 190, 181, 0.4)',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 25,
      marginBottom: 15,
      borderRadius: 10,
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
