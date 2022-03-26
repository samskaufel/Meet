import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: null
  }

  updateNumberOfEvents = (event) => {
    const number = event.target.value;
    if (number < 1 || number > 32) {
      this.setState({
        numberOfEvents: '',
        errorText: 'Please choose a number between 1 and 32',
      })
    } else {
      this.setState({
        numberOfEvents: number,
        errorText: '',
      });
    }
    this.props.updateEvents({numberOfEvents: number});
    
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          min={1}
          max={32}
          className="number-of-events"
          value={this.state.numberOfEvents}
          onChange={this.updateNumberOfEvents}
        ></input>
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;