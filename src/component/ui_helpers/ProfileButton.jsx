import {View, Text, Pressable, StyleSheet} from 'react-native';

export const ProfileButton = () => {
  const styles = StyleSheet.create({
    profileButton: {
      borderRadius: 50,
      borderWidth: 2,
      borderColor: '#fff',
      backgroundColor: '#ff0000',
      height: 20,
      width: 20,
      top: 10,
      left: 10,
    },
    profileButtonText: {
      color: '#fff',
    },
  });
  return (
    <View style={styles.profileButton}>
      <Pressable
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text style={styles.profileButtonText}>D</Text>
      </Pressable>
    </View>
  );
};
