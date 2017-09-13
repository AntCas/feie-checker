import React, { Component } from 'react';

import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>FEIE Checker</h2>
        </div>
        <div className="App-content">

          <div className="card">
            <div className="card-content">
              <h1>Do you qualify for the Foreign Income Tax Exemption?</h1>
              <div className="sub-headers">
                <h2>The FEIE can save you thousands of dollars per year if you live abroad.</h2>
                <h2>Take this test to see if you qualify.</h2>
              </div>
              <div className="button">
                <span>Get My Results</span>
              </div>
            </div>
          </div>
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
