import React, { Component } from 'react';

import TitleCard from './title-card';

import './reset.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayForm: false
    };
  }

  getMyResults = () => {
    this.setState({ displayForm: true }); 
  };

  render() {
    const { displayForm } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>FEIE Checker</h2>
        </div>
        <div className="App-content">
          { displayForm ? '' : <TitleCard onClick={ this.getMyResults } /> }
        </div>
        <div className="App-footer">
          <hr />
          <span>Copyright 2017</span>
        </div>
     </div>
    );
  }
}

export default App;
