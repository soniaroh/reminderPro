import * as actions from '../constants';

let initialState = {
  reminders: []
};
export const reminders = (state= initialState, action) => {
  switch(action.type){
    case actions.ADD_REMINDER:
    let id =  Math.random();
    return {
      reminders: [...state.reminders, {
        text: action.payload.text,
        dueDate: action.payload.dueDate,
        id
      }]
    }
    case actions.REMOVE_REMINDER:
    let filtered = state.reminders.filter(reminder => reminder.id !== action.payload)
    return {
      reminders: filtered
    }
    default:
    return state
  }
}