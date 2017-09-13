import React, { Component } from 'react';

import './style.css';

export default class Button  extends Component {
  render() {
    const { onSubmit, label } = this.props;

    return (
      <div className="button" onClick={ onSubmit }>
        <span>{ label }</span>
      </div>
    );
  }
}

