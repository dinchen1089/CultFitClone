import {English} from '../LocaleData/English';
const activityRecord = {
  header: English.ACTIVITY_AND_RECORD,
  subheader: [
    English.REPORT,
    English.BADGES,
    English.LOGGING,
    English.HISTORY,
    English.DOWNLOADS,
  ],
};

const accountSettings = {
  header: English.ACCONT_SETTINGS,
  subheader: [
    English.NOTIFICATION,
    English.CONTACT_DETAILS,
    English.PAYMENTS,
    English.OTHERS,
  ],
};

const fitnessDevices = {
  header: English.FITNESS_DEVICES,
  subheader: [
    English.GOOGLE_FIT,
    English.FITBIT,
    English.TV_APP,
    English.CULT_ROW,
  ],
};

const orders = {
  header: English.ORDERS,
  subheader: [English.VIEW_ALL_ORDERS],
};

const cultPassCORP = {
  header: English.CULT_PASS_CORP,
  subheader: [English.VIEW_ALL_BENEFITS],
};

const referralVoucherGiftCard = {
  header: English.REFERRAL_VOUCHRES,
  subheader: [
    English.REFER_FRIEND,
    English.MY_REFERRALS,
    English.REDEEM_VOUCHER,
  ],
};

const support = {
  header: English.SUPPORT,
  subheader: [English.QUERIES, English.TICKETS, English.FAQ],
};

Object.freeze(activityRecord);
Object.freeze(accountSettings);
Object.freeze(fitnessDevices);
Object.freeze(orders);
Object.freeze(cultPassCORP);
Object.freeze(referralVoucherGiftCard);
Object.freeze(support);

export {
  activityRecord,
  accountSettings,
  fitnessDevices,
  orders,
  cultPassCORP,
  referralVoucherGiftCard,
  support,
};
