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
        <h3 className="start">{event.start}</h3>
        <h3 className="end">{event.end}</h3>
        <h4 className="location">{event.location}</h4>

        <Button
          variant="outline-info"
          className={`${collapsed ? "show" : "hide"}-details`}
          onClick={this.handleClick}
        >
          {collapsed ? "Show Details" : "Hide Details"}
        </Button>

        {!collapsed && (
          <div
            className={`show-details ${this.state.collapsed ? "hide" : "show"}`}
          >
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
      </div>
    );
  }
}
export default Event;
