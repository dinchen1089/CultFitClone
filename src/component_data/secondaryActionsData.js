/**
 * This file will be consumed by Basic Actions Layout
 *
 * Required items
 *  bottomText,
 *  style,
 *  icons,
 *  onPress
 */

import DumbbellIcon from '../icons/DumbbellIcon';
import FitnessIcon from '../icons/FitnessIcon';
import NutritionIcon from '../icons/NutritionIcon';
import ScaleBathroomIcon from '../icons/Scalebathroom';
import ShoeIcon from '../icons/ShoeIcon';
import TShirtIcon from '../icons/Tshirt';
import {English} from '../LocaleData/English';

export const SecondaryActionsData = [
  {
    bottomText: English.LOSE_WEIGHT,
    key: 'cult-secondary-1',
    Icon: <ScaleBathroomIcon size={35} color={'#fff'} />,
    style: {backgroundColor: 'rgba(211,211,211,0.2)', paddingVertical: 30},
    onPress: navigation => {
      // navigate
    },
  },
  {
    bottomText: English.NUTRITION,
    key: 'cult-secondary-2',
    Icon: <NutritionIcon color={'#fff'} size={40} />,
    style: {backgroundColor: 'rgba(211,211,211,0.2)', paddingVertical: 30},
    onPress: navigation => {
      //navigate
    },
  },
  {
    bottomText: English.APPAREL,
    key: 'cult-secondary-3',
    Icon: <TShirtIcon color={'#fff'} size={40} />,
    style: {backgroundColor: 'rgba(211,211,211,0.2)', paddingVertical: 30},
    onPress: navigation => {
      //navigate
    },
  },
  {
    bottomText: English.DUMBBELL,
    key: 'cult-secondary-4',
    Icon: <DumbbellIcon color={'#fff'} size={40} />,
    style: {backgroundColor: 'rgba(211,211,211,0.2)', paddingVertical: 30},
    onPress: navigation => {
      //navigate
    },
  },
  {
    bottomText: English.TREADMILL,
    key: 'cult-secondary-5',
    Icon: <FitnessIcon color={'#fff'} size={40} />,
    style: {backgroundColor: 'rgba(211,211,211,0.2)', paddingVertical: 30},
    onPress: navigation => {
      //navigate
    },
  },
  {
    bottomText: English.SHOES,
    key: 'cult-secondary-6',
    Icon: <ShoeIcon color={'#fff'} size={45} />,
    style: {backgroundColor: 'rgba(211,211,211,0.2)', paddingVertical: 30},
    onPress: navigation => {
      //navigate
    },
  },
];
