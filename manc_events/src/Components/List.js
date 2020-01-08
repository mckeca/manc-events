import React, { Component } from 'react';
import EventCard from './EventCard';
import util from './utils/utils';
import Button from './Button';
import Search from './Search';
import Map from './Map';
import Loading from './Loading';

class List extends Component {
  state = {
    events: [],
    isLoading: true
  };

  componentDidMount = () => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&countryCode=GB&city=manchester&apikey=MPEjJbqNGhQLZI0ouzQ1GCmBLYxGHsqB`
    )
      .then(response => {
        return response.json();
      })
      .then(events => {
        this.setState({
          events: util(events._embedded.events),
          isLoading: false
        });
      });
  };

  render() {
    return (
      <div id="list-container">
        <Map events={this.state.events} />
        <section id="button-panel">
          <Button fetchEvents={this.fetchEvents} />
        </section>
        <Search
          handleSearch={this.handleSearch}
          startLoading={this.startLoading}
        />
        <ul id="list-ul">
          {!this.state.isLoading ? (
            this.state.events.map(event => {
              return <EventCard event={event} key={event.id} />;
            })
          ) : (
            <Loading />
          )}
        </ul>
      </div>
    );
  }

  fetchEvents = (keyword = '', eventType) => {
    if (keyword) {
      keyword = 'keyword=' + keyword + '&';
    }
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?${keyword}classificationName=${eventType}&countryCode=GB&city=manchester&apikey=MPEjJbqNGhQLZI0ouzQ1GCmBLYxGHsqB`
    )
      .then(response => {
        return response.json();
      })
      .then(events => {
        if (!events.page.totalElements)
          this.setState({ events: [], isLoading: false });
        else
          this.setState({
            events: util(events._embedded.events),
            isLoading: false
          });
      });
  };

  handleSearch = term => {
    this.fetchEvents(term, '');
  };

  startLoading = () => {
    this.setState({ isLoading: true });
  };
}

export default List;
