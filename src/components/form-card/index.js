import _ from 'lodash';
import React, { Component } from 'react';

import Button from '../button';

import './style.css';

export default class FormCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currAnswer: null
    };
  }

  render() {
    const { currAnswer } = this.state;

    const { onNext, onBack, content } = this.props,
          { question, helpText, answers } = content;

    const labels = _.map(_.keys(answers), (answer, i) =>
      <label key={ i }>
          <input type='radio'
            checked={ answer === currAnswer }
            onClick={ () => this.setState({ currAnswer: answer }) } />
          <span>{ `${answer}` }</span>
      </label>
    );

    return (
      <div className="form-card">
        <div className="card-content">
          <h1>{ `${question}`  }</h1>
          <div className="sub-headers">
            <h2>{ `${helpText}` }</h2>
          </div>
          <form>
            { labels }
          </form>
          <div className="navigation">
            <div className="button-container">
              <Button onSubmit={ onBack }
                type="beta"
                label="Back" />
            </div>
            <div className="button-container">
              <Button onSubmit={ () => onNext({[currAnswer]: answers[currAnswer]}) }
                type="cta"
                label="Next Question" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

