import React, { Component } from "react";

class Event extends Component {
  state = {
    event: {},
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

    console.log(event);
    return (
      <div className="event">
        <h5 className="summary">{event.summary}</h5>
        <div className="event-body">
          <p className="location">
            @{event.summary} | {event.location}
          </p>

          {!collapsed && (
            <div
              className={`extra-details ${
                this.state.collapsed ? "hide" : "show"
              }`}
            >
              <br />
              <p className="event-description">{event.description}</p>
            </div>
          )}

          <button
            variant="primary"
            id="eventDetails"
            className={`${collapsed ? "show" : "hide"}-details-btn`}
            onClick={this.handleClick}
          >
            {collapsed ? "Show Details" : "Hide Details"}
          </button>
        </div>
      </div>
    );
  }
}
export default Event;