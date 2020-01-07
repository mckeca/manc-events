import React, { Component } from 'react';
import EventCard from './EventCard';
import util from './utils/utils';
import Button from './Button';

class List extends Component {
  state = {
    events: [],
    apiKey: 'MPEjJbqNGhQLZI0ouzQ1GCmBLYxGHsqB'
  };

  componentDidMount = () => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&countryCode=GB&city=manchester&apikey=MPEjJbqNGhQLZI0ouzQ1GCmBLYxGHsqB`
    )
      .then(response => {
        return response.json();
      })
      .then(events => {
        this.setState({ events: util(events._embedded.events) });
      });
  };

  render() {
    return (
      <div>
        <Button fetchEvents={this.fetchEvents} />
        <ul>
          {this.state.events.map(event => {
            return <EventCard event={event} key={event.id} />;
          })}
        </ul>
      </div>
    );
  }

  fetchEvents = eventType => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${eventType}&countryCode=GB&city=manchester&apikey=MPEjJbqNGhQLZI0ouzQ1GCmBLYxGHsqB`
    )
      .then(response => {
        return response.json();
      })
      .then(events => {
        this.setState({ events: util(events._embedded.events) });
      });
  };
}

export default List;
