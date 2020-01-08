import React, { Component } from 'react';
import EventCard from './EventCard';
import util from './utils/utils';
import Button from './Button';
import Search from './Search';
import Map from './Map';
import Loading from './Loading';
import axios from 'axios';

class List extends Component {
	state = {
		events: [],
		isLoading: true,
		currentEventType: ''
	};

	componentDidMount = () => {
		const savedEventType = localStorage.getItem('currentEventType');
		this.fetchEvents('', savedEventType !== '""' ? savedEventType : '');
	};

	render() {
		const { isLoading, events } = this.state;
		return (
			<div id="list-container">
				<Map events={events} />
				<section id="button-panel">
					<Button fetchEvents={this.fetchEvents} />
				</section>
				<Search
					handleSearch={this.handleSearch}
					startLoading={this.startLoading}
				/>
				<ul id="list-ul">
					{!isLoading ? (
						events.length ? (
							events.map(event => {
								return <EventCard event={event} key={event.id} />;
							})
						) : (
							<p>no events found :(</p>
						)
					) : (
						<Loading />
					)}
				</ul>
			</div>
		);
	}

	fetchEvents = (keyword = '', eventType = '', callback) => {
		let keywordQuery = '';
		let eventTypeQuery = '';
		if (keyword) keywordQuery = 'keyword=' + keyword + '&';
		if (eventType) eventTypeQuery = 'classificationName=' + eventType + '&';
		axios
			.get(
				`https://app.ticketmaster.com/discovery/v2/events.json?${keywordQuery}${eventTypeQuery}countryCode=GB&city=manchester&apikey=MPEjJbqNGhQLZI0ouzQ1GCmBLYxGHsqB`
			)
			.then(res => {
				if (!res.data.page.totalElements)
					this.setState({ events: [], isLoading: false });
				else
					this.setState(
						{
							events: util(res.data._embedded.events),
							isLoading: false,
							currentEventType: eventType
						},
						() => {
							localStorage.setItem(
								'currentEventType',
								JSON.stringify(this.state.currentEventType)
							);
						}
					);
				if (callback) callback();
			});
	};

	handleSearch = term => {
		this.fetchEvents(term, this.state.currentEventType);
	};

	startLoading = () => {
		this.setState({ isLoading: true });
	};
}

export default List;
