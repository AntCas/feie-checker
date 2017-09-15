import _ from 'lodash';
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

    const positives = [],
          negatives = [],
          neutrals  = [];

    let score = 0;

    _.map(results, (result, i) => {
      const response = result.response,
            key      = _.keys(response)[0],
            value    = response[key];

      score += typeof(value) === "number" ? value : 0;

      const item = (
        <div className="item" key={ i }>
          <h3>{ `${result.question}` }</h3>
          <p>{ `${key}`  }</p>
        </div>      
      );

      if (value === 'pass' || value > 0) {
        positives.push(item);
      } else if (value === 'fail' || value < 0) {
        negatives.push(item);
      } else if (value === 0) {
        neutrals.push(item);
      }
    });

    return (
      <div className="analysis-card">
        <div className="card-content">
          <h1>{ `Success! Here are your Results` }</h1>
          <div className="sub-headers">
            <h2>Your score is { `${score}` }, looks like you { `${score >= 5 ? 'pass' : 'fail'}` }</h2>
            <h2>Positives:</h2>
              { positives }
            <h2>Negatives:</h2>
              { negatives }
            <h2>Neutrals:</h2>
              { neutrals }
          </div>
          <Button onSubmit={ onSubmit }
            type="cta"
            label="Start Over" />
        </div>
      </div>
    );
  }
}

