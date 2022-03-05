import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    number: 32,
  }

  updateNumberOfEvents = (event) => {
    this.setState({
      number: event.target.value,
    });
    // this.props.updateEventNumbers(event.target.value);
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
      </div>
    );
  }
}

export default NumberOfEvents;