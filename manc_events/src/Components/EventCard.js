import React from 'react';

const EventCard = ({ event }) => {
	return (
		<li key={event.id} className="event-card">
			<img src={event.image} alt="band pic"></img>
			<h2>{event.name}</h2>
			<p>
				{event.eventType}/{event.genre}
			</p>
			<p>Date: {event.date}</p>
			<p>Time: {event.time}</p>
			<a href={event.url}>Event Page</a>
		</li>
	);
};

export default EventCard;
