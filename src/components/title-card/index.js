import React, { Component } from 'react';

import Button from '../button';

import './style.css';

export default class TitleCard extends Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <div className="title-card">
        <div className="card-content">
          <h1>Do you qualify for the Foreign Earned Income Exclusion?</h1>
          <div className="sub-headers">
            <h2>The FEIE can save you thousands of dollars per year if you live abroad.</h2>
          </div>
          <Button onSubmit={ onSubmit }
            type="cta"
            label="Find Out If You Could Qualify" />
          <h2 className="disclaimer">Disclaimer: This service provides a "best-guess" of your eligibility. Accuracy cannot be guaranteed because the IRS considers each case individually. Use at your own discretion and consult your CPA.</h2>
        </div>
      </div>
    );
  }
}

