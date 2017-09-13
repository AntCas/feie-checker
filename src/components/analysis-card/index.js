import React, { Component } from 'react';

import Button from '../button';

import './style.css';

export default class AnalysisCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: null
    };
  }

  render() {
    const { onSubmit, results } = this.props;

    return (
      <div className="analysis-card">
        <div className="card-content">
          <h1>{ `Success! Here are your Results` }</h1>
          <div className="sub-headers">
            <h2>{ `test` }</h2>
          </div>
          <form>
          </form>
          <Button onSubmit={ onSubmit }
            type="cta"
            label="Start Over" />
        </div>
      </div>
    );
  }
}

