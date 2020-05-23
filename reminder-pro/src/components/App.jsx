import React from 'react';
import Reminder from './Reminder';
import { connect } from 'react-redux';
import { addReminder, removeReminder } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onAdd() {
    const { text, dueDate } = this.state
    this.props.addReminder(text, dueDate)
  }

  onDelete(id) {
    this.props.removeReminder(id)
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          ReminderPro
          </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to ..."
              onChange={this.onChange}
              name="text"
            />
            <input
              className="form-control"
              type="datetime-local"
              onChange={this.onChange}
              name="dueDate"
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.onAdd}
          >
            Add Reminder
          </button>
        </div>
        <ul className="list-group col-sm-4">
          {this.props.reminders.map(reminder => {
            return (
              <Reminder
                key={reminder.id}
                reminder={reminder}
                onDelete={this.onDelete}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  reminders: state
})


export default connect(mapStateToProps, { addReminder, removeReminder })(App)