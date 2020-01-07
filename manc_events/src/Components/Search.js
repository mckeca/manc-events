import React, { Component } from 'react';

class Search extends Component {
	state = {
		searchText: ''
	};
	render() {
		return (
			<form
				id="search-form"
				onSubmit={event => {
					this.props.handleSearch(this.state.searchText);
					event.preventDefault();
				}}
			>
				<label>
					<input
						type="text"
						onChange={this.handleChange}
						value={this.state.searchText}
					></input>
					<button>Search</button>
				</label>
			</form>
		);
	}

	handleChange = event => {
		const { value } = event.target;
		this.setState({
			searchText: value
		});
	};
}

export default Search;
