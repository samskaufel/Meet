import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: null
  }

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