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
    const { onSubmit, results, toggleTermsOfService } = this.props;

    const positives = [],
          negatives = [],
          neutrals  = [];

    let score = 0;

    let didPass = false,
        didFail = false;

    _.map(results, (result, i) => {
      const response = result.response,
            key      = _.keys(response)[0],
            value    = response[key];

      score += typeof(value) === "number" ? value : 0;

      const item = (
        <div className="item" key={ i }>
          <h3>{ `${result.question}` }</h3>
          <p>you answered: { `${key}`  }</p>
        </div>      
      );

      if (value === 'pass') {
        didPass = true;
        positives.push(item);
      } else if (value > 0) {
        positives.push(item);
      } else if (value === 'fail') {
        didFail = true;
        negatives.push(item);
      } else if (value < 0) {
        negatives.push(item);
      } else if (value === 0) {
        neutrals.push(item);
      }
    });

    let successMessage;

    if (didPass) {
      successMessage = 'Congrats! You most likely qualify.';
    } else if (didFail) {
      successMessage = "Aw shucks, looks like you don't qualify.";
    } else if (score > 7) {
      successMessage = 'Congrats! You most likely qualify.';
    } else if (score < 5) {
      successMessage = "Aw shucks, looks like you don't qualify.";
    } else {
      successMessage = "You're on the edge. You may or may not qualify depending on how the IRS interprets your claim.";
    }

    return (
      <div className="analysis-card">
        <div className="card-content">
          <h1>{ `Success! Here are your results:` }</h1>
          <div className="sub-headers">
            <h2 className="success-message">{ `${successMessage}` }</h2>
            <div className="result-section">
              <h2>These responses help your case</h2>
              <div className="answers">
                { positives.length > 0 ? positives : "no results" }
              </div>
            </div>
            <div className="result-section">
              <h2>These responses hurt your case</h2>
              <div className="answers">
                { negatives.length > 0 ? negatives : "no results" }
              </div>
            </div>
            <div className="result-section">
              <h2>These responses could go either way</h2>
              <div className="answers">
                { neutrals.length > 0 ? neutrals : "no results" }
              </div>
            </div>
            <div className="disclaimer">
              <h2>Legal Disclaimer</h2>
              <p>This test is not intended as legal advise, and should not be used as a substitute for seeking legal counsel.</p>
              <p>By using this website you agree to be bound by our <a onClick={ toggleTermsOfService }>Terms of Service</a>.</p>
            </div>
          </div>
          <Button onSubmit={ onSubmit }
            type="cta"
            label="Start Over" />
        </div>
      </div>
    );
  }
}

