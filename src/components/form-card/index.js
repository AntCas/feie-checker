import _ from 'lodash';
import React, { Component } from 'react';

import Button from '../button';

import './style.css';

export default class FormCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: null
    };
  }

  render() {
    const { onNext, onBack, content } = this.props,
          { question, helpText, answers } = content;

    const labels = _.map(answers, (answer, i) =>
      <label key={ i }>
          { `${answer}` }
          <input type='radio'
            checked={ answer === this.state.answer }
            onClick={ () => this.setState({ answer }) } />
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
          <Button onSubmit={ onBack }
            label="Back" />
          <Button onSubmit={ onNext }
            label="Next Question" />
        </div>
      </div>
    );
  }
}

