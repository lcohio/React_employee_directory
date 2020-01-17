import React, { Component } from 'react';
import './normalize.css';
import './App.css';

import axios from 'axios';
import Header from './components/Header';
import CardGallery from './components/CardGallery';


export default class App extends Component {

  state = {
    employees: []
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=12&nat=us')
    .then(responseData => this.setState({ employees: responseData.data.results }))
  }

  render() {
    return (
      <div className="container">
        <Header data={ this.state.employees } />
        <CardGallery data={ this.state.employees } />
      </div>
    );
  }
}


