import {English} from '../LocaleData/English';
// Requirmennt
// Header Component
// Subheader component
// list Component

// Header Component has text
// SubHeader Componet has text
// List component can be exapanded or collapsed based on the the state,
// Changes on clicking headerComponent
// If it is expanded then  HeaderComponentwill appear, subHeaderComponent becomes invisible and List Component show
//List component can be of varying types.
// Type 1) Clickable, has label on the left and  icon on the right
// Type 2)  Clickabke, has label the left nad has text on the right, the text can be dynamic
// Type 3) Non Clickable has lable on the left and additional text on the left, the text is dynamic  & there is a swith button which can be togelled

//Pseudo Code

//State that show the expand or the collapse of the list
const initialState = {
  ACTIVITY_RECORD: false,
  ACTIVITY_SETTNG: false,
  FITNESS_DEVICES: false,
  REFERRAL_VOUCHER: false,
};

const [isExpanded, setExpanded] = useState(initialState);

const handleExpand = id => {
  if (initialState.keys().include(id)) {
    setExpanded({...initialState, [id]: true});
  } else {
    navigation.navigate(id);
  }
};
const activityRecord = [
  {
    header: English.ACTIVITY_AND_RECORD,
    subheader: [
      English.REPORT,
      English.BADGES,
      English.LOGGING,
      English.HISTORY,
      English.DOWNLOADS,
    ],
    expandID: 'ACTIVITY_RECORD',
  },
  {
    header: English.ACCONT_SETTINGS,
    subheader: [
      English.NOTIFICATION,
      English.CONTACT_DETAILS,
      English.PAYMENTS,
      English.OTHERS,
    ],
    expandID: 'ACTIVITY_SETTNG',
  },
  {
    header: English.FITNESS_DEVICES,
    subheader: [
      English.GOOGLE_FIT,
      English.FITBIT,
      English.TV_APP,
      English.CULT_ROW,
    ],

    expandID: 'FITNESS_DEVICES',
  },
  {
    header: English.ORDERS,
    subheader: [English.VIEW_ALL_ORDERS],
  },
  {
    header: English.CULT_PASS_CORP,
    subheader: [English.VIEW_ALL_BENEFITS],
  },
  {
    header: English.REFERRAL_VOUCHRES,
    subheader: [
      English.REFER_FRIEND,
      English.MY_REFERRALS,
      English.REDEEM_VOUCHER,
    ],
    expandID: 'REFERRAL_VOUCHER',
  },
  {
    header: English.SUPPORT,
    subheader: [English.QUERIES, English.TICKETS, English.FAQ],
  },
];

//OnClick of  Header Componnent
