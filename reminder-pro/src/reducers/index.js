import * as actions from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies'

export const reminders = (state = [], action) => {
  let reminders = null
  state = read_cookie('reminders');
  switch(action.type){
    case actions.ADD_REMINDER:
    reminders = [...state, {
      text: action.payload.text,
      dueDate: action.payload.dueDate,
      id: Math.random()
    }]
    bake_cookie('reminders', reminders)
    return reminders;
    case actions.REMOVE_REMINDER:
    reminders = state.filter(reminder => reminder.id !== action.payload)
    bake_cookie('reminders', reminders)
    return reminders;

    case actions.REMOVE_ALL :
    reminders = [];
    bake_cookie('reminders', reminders);
    return reminders;
    default:
    return state
  }
}