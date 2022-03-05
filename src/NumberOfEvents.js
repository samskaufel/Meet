import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    number: 32,
    errorText: null
  }

  updateNumberOfEvents = (event) => {
    const number = event.target.value;
    if (number < 1 || number > 32) {
      this.setState({
        number: '',
        errorText: 'Please choose a number between 1 and 32',
      })
    } else {
      this.setState({
        number: number,
        errorText: '',
      });
    }
    this.props.updateNumberOfEvents(event.target.value);
    
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p>Number of Events:</p>
        <input
          type="number"
          className="number-of-events"
          value={this.state.number}
          onChange={this.updateNumberOfEvents}
        ></input>
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;