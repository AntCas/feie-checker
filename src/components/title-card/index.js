import React, { Component } from 'react';

import Button from '../button';

import './style.css';

export default class TitleCard extends Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <div className="title-card">
        <div className="card-content">
          <h1>Do you qualify for the Foreign Earned Income Tax Exclusion?</h1>
          <div className="sub-headers">
            <h2>The FEIE can save you thousands of dollars per year if you live abroad.</h2>
            <h2>Take this test to see if you qualify.</h2>
          </div>
          <Button onSubmit={ onSubmit }
            type="cta"
            label="Get My Results" />
        </div>
      </div>
    );
  }
}

