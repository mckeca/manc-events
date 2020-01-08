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
          this.props.startLoading();
          this.props.handleSearch(this.state.searchText);
          event.preventDefault();
        }}
      >
        <label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.searchText}
            id="search-box"
          ></input>
          <button id="search-button">Search</button>
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
