import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class Map extends Component {
	state = {
		lat: 53.480759,
		lng: -2.242631,
		zoom: 13
	};

	render() {
		const position = [this.state.lat, this.state.lng];
		const venues = {};
		this.props.events.forEach(event => {
			if (!Object.keys(venues).some(venue => venue === event.venue)) {
				venues[event.venue] = {
					eventCount: 1,
					events: [[event.url, event.name]],
					location: [event.lat, event.long]
				};
			} else {
				venues[event.venue].eventCount++;
				venues[event.venue].events.push([event.url, event.name]);
			}
		});
		// console.log(venues);
		return (
			<LeafletMap center={position} zoom={this.state.zoom}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
				/>
				{Object.keys(venues).map(venue => {
					return (
						<Marker position={venues[venue].location}>
							<Popup>
								<h3>{venue}</h3>
								Events: {venues[venue].eventCount}
								<br />
								{venues[venue].events.map(event => {
									return (
										<span>
											<a href={event[0]}>{event[1]}</a>
											<br />
										</span>
									);
								})}
							</Popup>
						</Marker>
					);
				})}
			</LeafletMap>
		);
	}
}

export default Map;
