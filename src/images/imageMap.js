export const HomeImageMap = {
  heroPrimary: {
    path: require('../images/cult.jpg'),
    id: 'home-0',
    bottomButton: {
      text: 'Know More',
      onPress: navigation => {
        navigation.navigate('Profile');
      },
    },
  },
  heroSecondary: {
    path: require('../images/cult1.jpg'),
    id: 'home-1',
    bottomButton: {
      text: 'Know More',
      onPress: navigation => {
        navigation.navigate('Profile');
      },
    },
  },
  heroThird: {
    path: require('../images/cult2.jpg'),
    id: 'home-2',
    bottomButton: {
      text: 'Know More',
      onPress: navigation => {
        navigation.navigate('Profile');
      },
    },
  },
};
