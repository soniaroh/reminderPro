import * as actions from '../constants';

export const addReminder = text => ({
  type: actions.ADD_REMINDER,
  payload: text
})

export const removeReminder = id => ({
  type: actions.REMOVE_REMINDER,
  payload: id
})