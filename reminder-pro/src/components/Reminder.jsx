import React from 'react';
import { trimDate } from '../utils';

export default function Reminder({ reminder, onDelete }) {
  return (
    <li className="list-group-item">
      <div className="list-item">
        <div>{reminder.text}</div>
        <div><em>{trimDate(reminder.dueDate)}</em></div>
      </div>
      <div className="list-item delete-button" onClick={() => onDelete(reminder.id)}>&#x2715;</div>
    </li>
  )
}
