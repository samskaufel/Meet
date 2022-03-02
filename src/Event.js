import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <p className="start">{event.start.dateTime}</p>
        <p className="end">{event.end.dateTime}</p>
        <p className="timezone">{event.start.timeZone}</p>
        <p className="location">{event.location}</p>

        {!collapsed && (
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
        <Button
          id='details-btn'
          variant="outline-info"
          className={`${collapsed ? "show" : "hide"}-details`}
          onClick={this.handleClick}
        >
          {collapsed ? "Show Details" : "Hide Details"}
        </Button>
      </div>
    );
  }
}
export default Event;
