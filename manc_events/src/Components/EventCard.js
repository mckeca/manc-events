import React from 'react';

const EventCard = ({ event }) => {
  return (
    <li key={event.id}>
      <h2>{event.name}</h2>
      <img src={event.image} alt="band pic"></img>
      <p>
        {event.eventType}/{event.genre}
      </p>
      <p>{event.date}</p>
      <p>{event.time}</p>
      <a href={event.url}>Event Page</a>
    </li>
  );
};

export default EventCard;
