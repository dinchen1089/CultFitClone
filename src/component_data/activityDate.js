const {English} = require('../LocaleData/English');

const FAQs = [
  {
    title: English.MEMBERSHIP,
    answers: `9 ${English.ANSWERS}`,
    url: 'https://support.cult.fit/support/solutions/folders/25000032396',
  },
  {
    title: English.LIVE_CLASS,
    answers: `15 ${English.ANSWERS}`,
    url: 'https://support.cult.fit/support/solutions/folders/25000032397',
  },
  {
    title: English.ENERGY_METER_REPORTS,
    answers: `10 ${English.ANSWERS}`,
    url: 'https://support.cult.fit/support/solutions/folders/25000032398',
  },
  {
    title: English.TECH_ISSUES,
    answers: `3 ${English.ANSWERS}`,
    url: 'https://support.cult.fit/support/solutions/folders/25000032399',
  },
];

const activityCardData = [
  {
    startDay: 'Mon',
    startMonthDate: 'Aug 21',
    endDay: 'Sun',
    endMonthDate: 'Aug 27',
    classAttendedLabel: English.CLASS_ATTENDED,
    totalClassAttended: 0,
    caloriesBurntLabel: English.CALORIES_BURNT,
    totalCaloriesBurnt: 0,
  },
  {
    startDay: 'Mon',
    startMonthDate: 'Aug 21',
    endDay: 'Sun',
    endMonthDate: 'Aug 27',
    classAttendedLabel: English.CLASS_ATTENDED,
    totalClassAttended: 0,
    caloriesBurntLabel: English.CALORIES_BURNT,
    totalCaloriesBurnt: 0,
  },
];

const faqLink =
  'https://support.cult.fit/support/solutions/folders/25000032396';

export {FAQs, activityCardData, faqLink};
