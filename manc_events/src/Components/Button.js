import React from 'react';

const eventType = ['All', 'Music', 'Dance', 'Theatre', 'Comedy'];

const deselectBtns = () => {
	const panel = document.getElementById('button-panel');
	const savedStorage = localStorage.getItem('currentEventType');
	console.log(savedStorage.slice(1, -1), '<<<<<<');
	for (let i = 0; i < panel.children.length; i++) {
		if (panel.children[i].innerHTML !== savedStorage.slice(1, -1)) {
			panel.children[i].className = 'btn-unselected';
			panel.children[i].removeAttribute('id');
		} else {
			panel.children[i].removeAttribute('class');
			panel.children[i].id = 'btn-selected';
		}
	}
};

const Button = ({ fetchEvents }) => {
	return eventType.map(event => {
		if (event === 'All')
			return (
				<button
					onClick={clickEvent => {
						fetchEvents('', '', deselectBtns);
						clickEvent.target.removeAttribute('class');
						clickEvent.target.id = 'btn-selected';
					}}
					id="btn-selected"
					key={event}
				>
					{event}
				</button>
			);
		return (
			<button
				onClick={clickEvent => {
					fetchEvents('', event, deselectBtns);
				}}
				className="btn-unselected"
				key={event}
			>
				{event}
			</button>
		);
	});
};

export default Button;
