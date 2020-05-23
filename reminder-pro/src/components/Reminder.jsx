import React from 'react';

export default function Reminder({ reminder, onDelete }) {
  return (
    <li className="list-group-item">
      <div className="list-item">{reminder.text}</div>
      <div className="list-item delete-button" onClick={() => onDelete(reminder.id)}>&#x2715;</div>
    </li>
  )
}
