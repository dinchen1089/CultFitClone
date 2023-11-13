/**
 * This file will be consumed by Basic Actions Layout
 *
 * Required items
 *  bottomText,
 *  style,
 *  icons,
 *  onPress
 */

import {English} from '../LocaleData/English';
import CalendarClockIcon from '../icons/CalendarClock';
import ScaleBathroomIcon from '../icons/Scalebathroom';
import TennisIcon from '../icons/TennisIcon';
import TShirtIcon from '../icons/Tshirt';
import WeightLifterIcon from '../icons/Weightlifter';
import KettlebellIcon from '../icons/kettlebell';

export const MainActionsData = [
  {
    bottomText: English.BOOK_CLASS,
    key: 'cult-1',
    Icon: <CalendarClockIcon size={30} color={'#2f8977'} />,
    onPress: navigation => {},
  },
  {
    bottomText: English.VIEW_GYMS,
    key: 'cult-2',
    Icon: <KettlebellIcon color={'#2eb361'} size={40} />,
    onPress: navigation => {},
  },
  {
    bottomText: English.WORKOUT_AT_HOME,
    key: 'cult-3',
    Icon: <WeightLifterIcon color={'#2cc251'} size={30} />,
    onPress: navigation => {},
  },
  {
    bottomText: English.BUY_SPORTS_WEAR,
    key: 'cult-4',
    Icon: <TShirtIcon color={'#2f9773'} size={30} />,
    onPress: navigation => {},
  },
  {
    bottomText: English.PLAY_SPORTS,
    key: 'cult-5',
    Icon: <TennisIcon color={'#2fa56c'} size={30} />,
    onPress: navigation => {},
  },
  {
    bottomText: English.WEIGHT_LOSS,
    key: 'cult-6',
    Icon: <ScaleBathroomIcon color={'#2bd13c'} size={30} />,
    onPress: navigation => {},
  },
];
