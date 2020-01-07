import React, { Component } from 'react';
import EventCard from './EventCard';

class List extends Component {
	state = {
		events: [],
		apiKey: 'MPEjJbqNGhQLZI0ouzQ1GCmBLYxGHsqB'
	};

	componentDidMount = () => {
		fetch(
			`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&countryCode=GB&city=manchester&apikey=${this.state.apiKey}`
		)
			.then(response => {
				return response.json();
			})
			.then(events => {
				this.setState({ events: events._embedded.events });
			});
		// this.setState({ events: [] });
	};

	render() {
		return (
			<div>
				<ul>
					{this.state.events.map(event => {
						return <EventCard event={event} key={event.id} />;
					})}
				</ul>
			</div>
		);
	}
}

export default List;
