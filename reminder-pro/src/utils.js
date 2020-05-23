import moment from 'moment';

export const trimDate = date => {
  return moment(new Date(date)).fromNow()
}
