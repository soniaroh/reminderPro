import React from 'react';
import Reminder from './Reminder';
import { connect } from 'react-redux';
import { addReminder, removeReminder } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onChange(e) {
    this.setState({ text: e.target.value })
  }

  onAdd() {
    this.props.addReminder(this.state.text)
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
        <div className="form-inline">
          <div className="form-group">
            <input className="form-control" placeholder="I have to ..." onChange={this.onChange} />
          </div>

          <button className="btn btn-success" onClick={this.onAdd}>Add Reminder</button>

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
  reminders: state.reminders
})


export default connect(mapStateToProps, { addReminder, removeReminder })(App)