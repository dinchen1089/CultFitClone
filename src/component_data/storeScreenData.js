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

export const AllReviews = {
  rating: 4.9,
  totalReviews: 435,
  forum: 'Google Review',
  comments: [
    {
      id: 'comments-1',
      name: 'Utkarsh Sahay',
      rating: '5.0',
      imagePath: require('../images/social_images/afterutk.png'),
      reviewDate: 7,
      description:
        'Esse aliquip consectetur ipsum elit excepteur nulla in sit ex occaecat enim officia enim ea. Proident enim sit in veniam et pariatur tempor officia mollit non commodo. Incididunt do laboris veniam elit quis est dolore ipsum incididunt labore incididunt pariatur dolore ea. Reprehenderit exercitation sint cupidatat non exercitation minim aliqua Lorem proident occaecat. Pariatur velit pariatur duis amet aliquip excepteur amet consectetur. Dolor ad mollit tempor non do deserunt duis ad id.',
    },
    {
      id: 'comments-2',
      name: 'Dinchen Tamang',
      rating: '5.0',
      imagePath: null,
      reviewDate: 8,
      description:
        'Exercitation nisi elit quis velit nisi cillum irure amet anim deserunt ad. Laborum tempor velit duis anim duis ullamco fugiat ea consequat ea consectetur anim. Velit sunt dolor amet consequat. Minim qui minim Lorem ex enim dolor laboris aute laborum occaecat.',
    },
    {
      id: 'comments-3',
      name: 'Rigen Tamang',
      rating: '5.0',
      imagePath: null,
      reviewDate: 8,
      description:
        'Excepteur dolor esse labore exercitation sit consequat est ad consequat voluptate. Quis cillum irure proident laboris ex. Sunt incididunt commodo officia velit. Aute cupidatat duis ut fugiat aliqua proident nostrud qui irure magna duis ipsum nisi do.',
    },
    {
      id: 'comments-4',
      name: 'Lakshana Sherpa',
      rating: '5.0',
      imagePath: null,
      reviewDate: 8,
      description:
        'Excepteur amet est pariatur pariatur esse consequat consequat ad et in enim qui. Consectetur exercitation exercitation ut veniam sint sunt aliqua cupidatat eu sunt velit ut cillum. Officia officia mollit incididunt id. Excepteur do eiusmod non voluptate aliquip veniam ex qui sunt excepteur occaecat.',
    },
  ],
};

export const bootCampFAQs = {
  title: 'FAQs',
  faqs: [
    {
      question: 'How is Cult Bootcamp different from Cultpass Elite?',
      answer:
        'This program focuses on 4 main elements to ensure that everyone reaches their weight loss goal in a super-efficient way. 1) Nutrition Each one of you will be assigned a nutritionist a week before the program kickstarts. The nutritionist will then check in with you every week to discuss what’s working/what’s not and alter your plan accordingly. Your nutritionist will also ask you to share your meals on a daily basis via WhatsApp to keep you on track. 2) Fitness Coach You will have one fitness throughout the 6 weeks of the program who will conduct your group workouts, correct your posture, check in your progress and build your base. All of our workouts are designed to help you lose weight and are different from a regular cult session. I’ve also included a ton of fun group activities and games to the program so there’s never a dull day! But that’s not all. We’ve designed online workouts and step challenges to keep you active and consistent even on days you don’t have an in-center session. 3) Workshops & maintenance plans  The program includes 5 online workshops every Saturday, led by our master trainers & experts on Nutrition, Mindfulness, Movements, Dance & Yoga. After the bootcamp is over, each of you will be given a comprehensive & easy-to-follow maintenance plan to help you retain the weight you lost during these 6 weeks. 4) Community Every Bootcamp batch will be conducted with a small group of people, all of whom have a goal similar to yours & are willing to give it their all. This also means that you get to go on a transformative journey with them by your side, getting inspired and inspiring each other in turn. We’ll also keep you all connected over a WhatsApp group where you can push one other to hit your goals!',
      id: 'question-1',
      serialNo: '01',
    },
    {
      question:
        'What happens if I miss some class(es) because of travel or other commitments?',
      answer:
        'In case you are travelling please do inform the coach beforehand so, that he/she can share a workout plan that you can do from anywhere. ',
      id: 'question-2',
      serialNo: '02',
    },
    {
      question: 'Can I cancel / refund my Bootcamp memberships?',
      answer:
        'No, there shall not be any cancellations or refunds, once you have purchased the Bootcamp membership.',
      id: 'question-3',
      serialNo: '03',
    },
    {
      question: 'Can I be a part of bootcamp if I have any medical issues?',
      answer:
        'For Lifestyle conditions such as Type 2 Diabetes, Hypothyroidism, hypertension, PCOS/PCOD, Hyperuricemia (high uric acid), Gut related issues such as GERD/ Acid reflux, Irritable bowel syndrome, Inflammatory bowel disease, you can join the bootcamp program, however, we would require a Go-ahead certificate from your physician to do the activities and follow the diet we prescribe in this program. For clinical conditions such as Cancer, Autoimmune disorders, Kidney related diseases, we may not be able to help you get better or manage with the condition, as our program is designed to lose weight. If you have already bought the membership, please reach out to the bootcamp team for further details.',
      id: 'question-4',
      serialNo: '04',
    },
    {
      question: 'How do I ensure maximum results?',
      answer:
        "Consistency is the key here!  ✅ Maintain at least 80% attendance ✅ 7000 steps daily ✅ Share 2 images of your meals daily with your nutritionist They'll guide and support you in your journey of being better every day, but your commitment and dedication is the game changer!",
      id: 'question-5',
      serialNo: '05',
    },
    {
      question:
        'Will I have the same trainer or nutritionist throughout the weight loss program?',
      answer:
        "Absolutely! You'll have the same coach throughout your journey. In case there are changes citing a personal emergency or operational requirements that result in changes in the assigned coach, the newly assigned coach will be equally qualified and experienced to support you with your transformation journey - we promise!",
      id: 'question-6',
      serialNo: '06',
    },
    {
      question: 'What happens if the Bootcamp dates are modified/cancelled?',
      answer:
        'In such cases, we will communicate any changes in advance and provide alternatives or refunds, if applicable.',
      id: 'question-7',
      serialNo: '07',
    },
  ],
};
