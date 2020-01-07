import React from 'react';

const EventCard = ({ event }) => {
	return (
		<li key={event.id}>
			<h2>{event.name}</h2>
			<img src={event.images[0].url} alt="band pic"></img>
			<p>
				{event.classifications[0].segment.name}/
				{event.classifications[0].genre.name}
			</p>
			<p>{event.dates.start.localDate}</p>
			<p>{event.dates.start.localTime}</p>
		</li>
	);
};

export default EventCard;
