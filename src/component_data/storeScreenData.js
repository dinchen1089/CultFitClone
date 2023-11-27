import WhatsAppIcon from '../icons/WhatsAppIcon';
import GroupPersonIcon from '../icons/GroupPersonIcon';
import MealIcon from '../icons/MealIcon';

import AdressIcon from '../icons/AddressIcon';
import BowlIcon from '../icons/BowlIcon';
import ClipBoardIcon from '../icons/ClipboardIcon';
import PersonStandingIcon from '../icons/PersonStandingIcon';
import FitnessIcon from '../icons/FitnessIcon';
import PersonSwimmingIcon from '../icons/SwimmingIcon';
import YogaIcon from '../icons/YogaIcon';
import HandHoldingHeartIcon from '../icons/HandHoldingHeartIcon';
import TargetIcon from '../icons/TargetIcon';

export const joinBootCampTextIcon = [
  {
    id: 'id-1',
    text: 'Fun small group  workouts',
    icon: <GroupPersonIcon color={'white'} />,
  },
  {
    id: 'id-2',
    text: 'Easy-to-follow meal plan',
    icon: <MealIcon color={'white'} />,
  },
  {
    id: 'id-3',
    text: 'Engaging WhatsApp community',
    icon: <WhatsAppIcon color={'white'} />,
  },
];

export const Steps = [
  {
    id: 'steps-1',
    text: 'Personalized trainer-led functional group workouts',
    path: require('../images/social_images/gym1.jpg'),
    icon: (
      <AdressIcon
        style={{
          fontSize: 20,
          color: 'white',
        }}
      />
    ),
  },
  {
    id: 'steps-2',
    text: '1:1 Nutrition coaching & personalized homely mean plans',
    path: require('../images/social_images/gym2.jpg'),
    icon: (
      <BowlIcon
        style={{
          fontSize: 20,
          color: 'white',
        }}
      />
    ),
  },
  {
    id: 'steps-3',
    text: 'Coaches will help you build discipline & healthy habits',
    path: require('../images/social_images/gym3.jpg'),
    icon: (
      <ClipBoardIcon
        style={{
          fontSize: 20,
          color: 'white',
        }}
      />
    ),
  },
];

export const weightStatus = [
  {
    id: 'weightStatus-1',
    beforeImage: require('../images/social_images/beforeutk.png'),
    afterImage: require('../images/social_images/afterutk.png'),
    startDay: 0,
    endDay: 45,
    name: 'Utkarsh',
    weightLossed: 10,
  },
  {
    id: 'weightStatus-2',
    beforeImage: require('../images/social_images/gym2.jpg'),
    afterImage: require('../images/social_images/gym2.jpg'),
    startDay: 0,
    endDay: 45,
    name: 'Kishan',
    weightLossed: 0,
  },
  {
    id: 'weightStatus-3',
    beforeImage: require('../images/social_images/gym3.jpg'),
    afterImage: require('../images/social_images/gym3.jpg'),
    startDay: 0,
    endDay: 45,
    name: 'Dinchen',
    weightLossed: 1,
  },
];

export const additionalBenefits = [
  {
    id: 'additionalBenefits-1',
    imagePath: require('../images/social_images/together.jpg'),
    header: 'Together we achieve',
    subHeader: 'Strong and accountable community with a singular vision',
  },
  {
    id: 'additionalBenefits-2',
    imagePath: require('../images/social_images/diet.jpg'),
    header: 'Online ordering guides',
    subHeader: 'Recommendations for healthy restaurants & online foods',
  },
  {
    id: 'additionalBenefits-3',
    imagePath: require('../images/social_images/weightloss.jpg'),
    header: 'Never gain it back',
    subHeader: "A plan that ensures you don't gain the weight back",
  },
];

//TODO Complete this later
export const customerView = [
  {
    id: 'customerView-1',
    image: '',
  },
];

export const weekActivities = [
  {
    id: 'weekActivities-1',
    day: 1,
    header: 'AT-CENTER WORKOUT',
    subHeader: 'Strength Circuit + Partner Workouts + Games',
    icon: <PersonStandingIcon style={{color: 'white', fontSize: 20}} />,
  },
  {
    id: 'weekActivities-2',
    day: 2,
    header: 'HOME WORKOUT',
    subHeader: 'Mobility + Step Challenge',
    icon: <FitnessIcon style={{color: 'white', fontSize: 20}} />,
  },
  {
    id: 'weekActivities-3',
    day: 3,
    header: 'AT-CENTER WORKOUT',
    subHeader: 'Full Body Circuit + Team Workouts + Games',
    icon: <PersonSwimmingIcon style={{color: 'white', fontSize: 20}} />,
  },

  {
    id: 'weekActivities-4',
    day: 4,
    header: 'HOME WORKOUT',
    subHeader: 'Hatha Yoga + Step Challenge',
    icon: <YogaIcon style={{color: 'white', fontSize: 20}} />,
  },
  {
    id: 'weekActivities-5',
    day: 5,
    header: 'AT-CENTER WORKOUT',
    subHeader: 'Strength Circuit + Core Workout',
    icon: <PersonSwimmingIcon style={{color: 'white', fontSize: 20}} />,
  },
  {
    id: 'weekActivities-6',
    day: 6,
    header: 'AT-CENTER WORKOUT',
    subHeader: 'Crossfit Style Workout+ Benchmark Test',
    icon: <TargetIcon style={{color: 'white', fontSize: 20}} />,
  },
  {
    id: 'weekActivities-7',
    day: 7,
    header: 'ACTIVE RECOVERY',
    subHeader: 'Work and Relax',
    icon: <HandHoldingHeartIcon style={{color: 'white', fontSize: 20}} />,
  },
];

export const bookingInfo = [
  'Pre-booked 4 sessions per week at the center, for total of 24 sessions',
  'Weekly Catchups with the nutritionist',
  'Instant & unlimited call and chat support',
];

export const eliteData = {
  type: 'ELITE',
  header: 'BENEFITS OF ELITE MEMBERS',
  subHeader:
    'Additional 6 weeks extension on top of your existing Elite membership',
};
