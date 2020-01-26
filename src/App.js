import React, { Component } from 'react';
import './normalize.css';
import './App.css';

import axios from 'axios';
import CardGallery from './components/CardGallery';


export default class App extends Component {

  constructor() {
    super()
    this.state = {
      employees: [],
      filteredResults: [],
      searchState: ''
    }
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=12&nat=us')
    .then(responseData => this.setState({ employees: responseData.data.results }))
  }

  filterSearch = e => {
    this.setState({
      searchState: e.target.value
    })
    const newData = this.state.employees.filter((item) => {
      const itemData = item.name.first || item.name.last ? item.name.first.toLowerCase() : ''.toLowerCase();
      return itemData.indexOf(this.state.searchState) > -1;
    });
    this.setState({
      filteredResults: newData
    })
  }
    
  

  render() {
    return (
      <div className="container">
        <header>
				  <div className="header-inner-container">
					  <div className="header-text-container">
						  <h1>React API UI Demo</h1>
					  </div>
					  <div className="search-container">
						  <form action="#" method="get">
							  <input onChange={ this.filterSearch } type="search" id="search-input" className="search-input" placeholder="Search..." />
						  </form>
					  </div>
				  </div>
			  </header>
        {this.state.filteredResults.length > 0 ?
          <CardGallery data={ this.state.filteredResults } /> :
          <CardGallery data={ this.state.employees } />
        } 
      </div>
    );
  }
}


