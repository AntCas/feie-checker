import React, { Component } from 'react';

import './style.css';

const YES      = 'yes',
      NO       = 'no',
      NOT_SURE = 'not_sure';

class BonaFideResidence extends Component {
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
      <div className='bona-fide-residence'>
        <div className="content">
          <h2>Bona Fide Residence Test</h2>

          <p>The primary benefit of passing the Bona Fide Residence test is that there is no limit to the amount of time you can spend in the USA. As long as you maintain your Bona Fide Resident status you can spend as much time as you wish in the USA and still claim the exemption.</p>

          <p>However, the bona fide resident test is significantly harder to qualify for than the Physical Presence Test and is much less cut and dry.</p>

          <p>To qualify you must prove that you are a bona fide resident of a foreign country.</p>

          <p>Because you need to have been a tax resident of the foreign country for at least a year before you can claim bona fide residency, most people will file using the physical presence test the first year living abroad. Then, after they’ve been a tax resident of their host country for a year they will file under the BFR test.</p>

          <p>Living in a foreign country for a year does not mean you automatically qualify for the FEIE.</p>

          <form>
            <span>Have you been a tax resident of the foreign country for at least a year? (Regardless of whether you filed for the FEIE)</span>

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

          <div className='bfr-advice'>
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

export default BonaFideResidence;
