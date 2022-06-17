import React, { Component } from "react";

class Event extends Component {
  state = {
    collapsed: true,
    eventDetailsButton: 'Show Details',
  };

  eventDetails = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      eventDetailsButton: this.state.collapsed ? 'Hide details' : 'Show details',
    });
  };

  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <p className="start">{new Date(event.start.dateTime).toLocaleDateString()}</p>
        <p className="timezone">{event.start.timeZone}</p>
        <p className="location">{event.location}</p>

        {!this.state.collapsed && (
          <div className='event-details'>
            <h3>Details:</h3>
            <a
              className='htmlLink'
              href={event.htmlLink}
              rel='noreferrer'
              target='_blank'
            >
              View event on Google Calendar
            </a>
            <p className='description'>{event.description}</p>
          </div>
        )}
        <button
          className='details-button'
          onClick={() => this.eventDetails()}
        >
          {this.state.eventDetailsButton}
        </button>
      </div>
    );
  }
}
export default Event;
