import React from 'react';

const EventCard = ({ event }) => {
	console.log(event.price);
	return (
		<li
			key={event.id}
			className="event-card"
			onClick={() => {
				document.location.href = event.url;
			}}
		>
			<img src={event.image} alt="band pic"></img>
			<h2>{event.name}</h2>
			<p>
				{event.eventType}/{event.genre}
			</p>
			<p>Venue: {event.venue}</p>
			<p>Date: {event.date}</p>
			<p>Time: {event.time}</p>
			<p>
				Price range: £{event.price.min} - £{event.price.max}
			</p>
		</li>
	);
};

export default EventCard;
