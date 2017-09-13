import _ from 'lodash';

import React, { Component } from 'react';

import './style.css';

export default class FormCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: null
    };
  }

  render() {
    const { onSubmit, content } = this.props,
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
      <div className="title-card">
        <div className="card-content">
          <h1>{ `${question}`  }</h1>
          <div className="sub-headers">
            <h2>{ `${helpText}` }</h2>
          </div>
          <form>
            { labels }
          </form>
          <div className="button" onClick={ onSubmit }>
            <span>Next Question</span>
          </div>
        </div>
      </div>
    );
  }
}

