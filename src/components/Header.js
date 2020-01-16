import React from 'react';
import SearchForm from './SearchForm';

const Header = props => {
	return (
		<header>
			<div className="header-inner-container">
				<div className="header-text-container">
					<h1>Public API Demo</h1>
				</div>
				<SearchForm data={ props.data } />
			</div>
		</header>
	)
}

export default Header