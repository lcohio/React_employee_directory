import React, { Component } from 'react';

export default class SearchForm extends Component {

	state = {
		searchText: ''
	}

	handleChange = (e) => {
		this.setState({
			searchText: e.target.value
		})
	}

	render() {
		return (
			<div className="search-container">
				<form action="#" method="get">
					<input onChange={ this.handleChange } type="search" id="search-input" className="search-input" placeholder="Search..." />
				</form>
			</div>
		)
	}
}