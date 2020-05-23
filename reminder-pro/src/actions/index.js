import * as actions from '../constants';

export const addReminder = (text, dueDate) => ({
  type: actions.ADD_REMINDER,
  payload: {
    text,
    dueDate
  }
})

export const removeReminder = id => ({
  type: actions.REMOVE_REMINDER,
  payload: id
})
