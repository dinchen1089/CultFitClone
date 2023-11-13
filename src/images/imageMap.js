import ChevronRightIcon from '../icons/ChevronRightIcon';

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
export const HomeExploreSectionMap = {
  exploreRunner: {
    path: require('../images/runner.jpg'),
    id: 'home-explore-2',
    bottomText:
      'Make stubborn fat disappear with sustainable weight loss coaching',
    bottomButton: {
      text: 'EXPLORE CULT TRANSFORM',
      onPress: navigation => {
        navigation.navigate('Profile');
      },
    },
  },
};
export const HomeGoalBasedProgramMap = {
  DietPlate: {
    path: require('../images/DietPlate.jpg'),
    id: 'home-goal-based-1',
    sideText: {
      heading: {
        text: 'Weight loss coaching',
        style: {
          color: '#000',
          fontSize: 25,
          fontWeight: 'bold',
          textTransform: 'capitalize',
        },
      },
      subHeading: {
        text: 'stop dieting, lose weight for good',
        style: {
          color: '#778899',
          fontSize: 12,
          textTransform: 'capitalize',
        },
      },
    },
    sideButton: {
      text: <ChevronRightIcon color={'#000'} size={50} />,
      onPress: () => {
        console.log('pressed');
      },
    },
  },
  GlucoseStrip: {
    path: require('../images/glucose_strip.jpg'),
    id: 'home-goal-based-2',
    sideText: {
      heading: {
        text: 'Diabetes reversal',
        style: {
          color: '#000',
          fontSize: 25,
          fontWeight: 'bold',
          textTransform: 'capitalize',
        },
      },
      subHeading: {
        text: 'Get Off Medicines without any fad dieting',
        style: {
          color: '#778899',
          fontSize: 12,
          textTransform: 'capitalize',
        },
      },
    },
    sideButton: {
      text: <ChevronRightIcon color={'#000'} size={50} />,
      onPress: () => {
        console.log('pressed');
      },
    },
  },
};
export const DevelopersMap = {
  Utkarsh: {
    path: require('../images/utk.jpg'),
    id: 'home-dev-1',
    bottomButton: {
      text: 'UTKARSH SAHAY',
      onPress: navigation => {
        navigation.navigate('Profile');
      },
    },
  },
  Dinchen: {
    path: require('../images/dinchen.jpg'),
    id: 'home-dev-2',
    bottomButton: {
      text: 'DINCHEN TAMANG',
      onPress: navigation => {
        navigation.navigate('Profile');
      },
    },
  },
};
export const PeopleMap = {
  Dinchen: {
    name: 'Dinchen',
    designation: 'SDE 2',
    headline: 'The expert coder',
    id: 'computer scientist',
    path: require('../images/dinchen.jpg'),
  },
  Utkarsh: {
    name: 'Utkarsh Sahay',
    designation: 'SDE 2',
    headline: 'One step at a time',
    id: 'noob',
    path: require('../images/utk.jpg'),
  },
};
export const RecipesMap = {
  Ladoo: {
    path: require('../images/sweets-1.jpg'),
    id: 'home-sweets-1',
    bottomButton: {
      text: 'SURPRISE RECIPE',
      onPress: navigation => {
        navigation.navigate('Profile');
      },
    },
  },
  Poha: {
    path: require('../images/sweets-1.jpg'),
    id: 'home-sweets-2',
    bottomButton: {
      text: 'Know More',
      onPress: navigation => {
        navigation.navigate('Profile');
      },
    },
  },
  Others: {
    path: require('../images/sweets-1.jpg'),
    id: 'home-sweets-3',
    bottomButton: {
      text: 'Know More',
      onPress: navigation => {
        navigation.navigate('Profile');
      },
    },
  },
};

export const RecipesList = {
  one: {
    path: require('../images/sweets-1.jpg'),
    id: 'home-recipe-1',
    heading: 'Chatpata Baked Samosa',
    text: '111 calories',
  },
  two: {
    path: require('../images/sweets-1.jpg'),
    id: 'home-recipe-2',
    heading: 'Protein Filled Chana Chat',
    text: '282 calories',
  },
  three: {
    path: require('../images/sweets-1.jpg'),
    id: 'home-recipe-3',
    heading: 'Refreshing Watermelon Sorbet',
    text: 'Cooking Time: 10 mins',
  },
};
