import React, { Component } from 'react';

import './style.css';

const YES      = 'yes',
      NO       = 'no',
      NOT_SURE = 'not_sure';

class PhysicalPresence extends Component {
  constructor(props) {
     super(props);

     this.state = { willPassTest: null };
  }

  handleChange = (event) => {
    this.setState({ willPassTest: event.currentTarget.value });
  }

  render() {
    const { willPassTest } = this.state;

    return (
      <div className='physical-presence'>
        <div className="content">
          <h2>Physical Presence Test:</h2>

          <p>The first and easiest way to pass the test is to spend no more than 35 days in the United States during any 12 month period.</p>

          <p>Remember, even one minute inside the US (including US airspace or a layover in the airport) counts as a full day according to the IRS.</p>

          <p>We highly recommend planning on leaving at least 3 days buffer. This will help protect you against unexpected changes to your travel plans. If you don’t build in a buffer a single overnight layover could end up costing you thousands of dollars.</p>

          <h2>Take the Physical Presence Test</h2>

          <form>
            <span>Will you spend more than 35 days in the US during the 12 month period you plan to claim the FEIE for?</span>

            <label>
              Yes
              <input type="radio" name="answer" value={ YES } checked={ willPassTest === YES } onChange={ this.handleChange } />
            </label>

            <label>
              No
              <input type="radio" name="answer" value={ NO } checked={ willPassTest === NO } onChange={ this.handleChange } />
            </label>
            <label>
              Not Sure
              <input type="radio" name="answer" value={ NOT_SURE } checked={ willPassTest === NOT_SURE } onChange={ this.handleChange } />
            </label>
          </form>

          <div className='ppt-advice'>
            <p className={ `${willPassTest === YES ? '' : 'hide'}` }>Great! Looks like you qualify for the FEIE [navigate to “how much can you save?”]</p>
            <p className={ `${willPassTest === NO ? '' : 'hide'}` }>Looks like you don't qualify under the Physical Presence Test, but you may still qualify under the “Bona Fide Resident Test” [navigate to “Bona Fide Resident Test”]</p>
            <p className={ `${willPassTest === NOT_SURE  ? '' : 'hide'}` }>You may still qualify under the “Bona Fide Resident Test” [navigate to “Bona Fide Resident Test”]</p>
          </div>

             <a href="http://www.alliscpa.com/physical_presence.php">FAQs about the Physical Presence Test</a>
        </div>
      </div>
    );
  }
}

export default PhysicalPresence;
