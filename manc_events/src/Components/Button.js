import React from 'react';

const eventType = ['All', 'Music', 'Dance', 'Theatre', 'Comedy'];

const Button = ({ fetchEvents }) => {
	return eventType.map(event => {
		if (event === 'All')
			return (
				<button onClick={() => fetchEvents('')} key={event}>
					{event}
				</button>
			);
		return (
			<button onClick={() => fetchEvents(event)} key={event}>
				{event}
			</button>
		);
	});
};

export default Button;
