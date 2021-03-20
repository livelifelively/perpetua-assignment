import moment from 'moment';

export const formatDate = (input) => {
  const date1 = new Date(input);
  return moment(date1).format('DD MMM YYYY');
};

export const timeStampForDaysFromToday = (daysFrom) => {
  return moment().startOf('day').subtract(daysFrom, 'day').unix();
};

export const addDaysToNowUnix = (days) => {
  return moment().add(days, 'days').unix();
};
