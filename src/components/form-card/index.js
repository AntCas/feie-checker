import React, { Component } from 'react';

import './style.css';

export default class FormCard extends Component {
  render() {
    const { onSubmit, content } = this.props,
          { question, helpText, answers } = content;

    return (
      <div className="title-card">
        <div className="card-content">
          <h1>{ `${question}`  }</h1>
          <div className="sub-headers">
            <h2>{ `${helpText}` }</h2>
          </div>
          <div className="button" onClick={ onSubmit }>
            <span>Next Question</span>
          </div>
        </div>
      </div>
    );
  }
}

