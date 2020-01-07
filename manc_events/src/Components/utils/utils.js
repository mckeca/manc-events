const util = events => {
  return events.map(event => {
    return {
      name: event.name,
      id: event.id,
      url: event.url,
      image: event.images[0].url,
      date: event.dates.start.localDate,
      time: event.dates.start.localTime,
      eventType: event.classifications[0].segment.name,
      genre: event.classifications[0].genre.name,
      long: event._embedded.venues[0].location.longitude,
      lat: event._embedded.venues[0].location.latitude,
      venue: event._embedded.venues[0].name
    };
  });
};

export default util;
