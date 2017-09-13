import React, { Component } from 'react';

import './style.css';

export default class Button  extends Component {
  render() {
    const {
      onSubmit,
      type,
      label
    } = this.props;

    return (
      <div className={ `button ${type}`} onClick={ onSubmit }>
        <span>{ label }</span>
      </div>
    );
  }
}

