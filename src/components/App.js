import React, { Component } from 'react';

import TitleCard from './title-card';

import './reset.css';
import './App.css';

const YES             = 'Yes',
      NO              = 'No',
      NUMBER          = 'Number',
      PURCHASED_HOUSE = 'Purchased House',
      RENTED_HOUSE    = 'Rented House or Apartment',
      RENTED_ROOM     = 'Rented Room',
      EMPLOYER        = 'Quarters Furnished by Employer',
      STUDENT_VISA    = 'Student Visa',
      TEMPORARY_VISA  = 'Temporary Work Visa',
      WORK_VISA       = 'Work Visa',
      PERM_RESIDENT   = 'Permanent Resident',
      DUAL_CITIZEN    = 'Dual Citizenship',
      NO_VISA         = 'No Visa',
      OTHER           = 'Other';

const questions = [{
  question: 'How long will you be outside the US?',
  helpText: 'You must live outside the US for 12 consecutive months in order to qualify.',
  answers:  [NUMBER]
}, {
  question: 'Will you spend fewer than 35 days in the US?',
  helpText: 'If yes, then you qualify under the Physical Presence Test, If no then you must qualify under the BFR test. Note that if you spend more than 24 hours anywhere that is not in a foreign country (international waters, traveling between two foreign countries by passing through the USA, most likely Antartica), that will count as a full day towards your 35 day limit. More information about specific scenarios: ',
  answers:  [YES, NO]
}, {
  question: 'Do you work for the US Government or Military?',
  helpText: 'If you are living in the foreign country as part of a government contract or stationed there as part of the armed forces, then you do not qualify as a BFR.',
  answers:  [YES, NO]
}, {
  question: 'What is you housing situation?',
  helpText: 'Answering “a” is best and gives you a high chance of qualifying, “b” and “c” are acceptable, “d” if you have free housing through an employer you do not qualify',
  answers: [PURCHASED_HOUSE, RENTED_HOUSE, RENTED_ROOM, EMPLOYER] 
}, {
  question: 'Did any of you family live with you abroad during any part of the tax year?',
  helpText: 'If you’re able to answer Yes to this question that is a big plus in your favor, especially if any of them are citizens of the foreign country (you would make a note of this on line 12a of form 2555).',
  answers:  [YES, NO]
}, {
  question: 'Have you submitted a statement to the authorities of the foreign country where you claim bona fide residence that you are not a resident of that country?',
  helpText: 'The answers to this question should always be “No”.',
  answers:  [YES, NO]
}, {
  question: 'Are you required to pay income tax to the country where you claim bona fide residence?',
  helpText: '“Yes” is better here, but if you live in a country with no income tax then the answer is “No”.',
  answers:  [YES, NO]
}, {
  question: 'Is your work contract based for a specific period of time?',
  helpText: 'In general, jobs with a finite length will not qualify you under BFR status.',
  answers:  [YES, NO]
}, {
  question: 'What type of visa did you use to enter the foreign country?',
  helpText: 'If you have a student visa or a temporary work visa (renewal of which is continent on your employment) then you care not a BFR. If you are a permanent resident or hold citizenship then you  most likely qualify as a BFR regardless of other factors.',
  answers:  [STUDENT_VISA, TEMPORARY_VISA, WORK_VISA, PERM_RESIDENT, DUAL_CITIZEN, NO_VISA, OTHER]
}, {
  question: '(If answered “* Visa”) Does your visa limit the length of your stay or employment in a foreign country?',
  helpText: 'If yes, then you most likely do not qualify as a BFR.',
  answers:  [YES, NO]
}, {
  question: 'Did you maintain a home in the United States while living abroad?',
  helpText: 'Answering “Yes” does not disqualify you, but “No” is better.',
  answers:  [YES, NO]
}, {
  question: '(If yes to the previous) Do any of your family members live there?',
  helpText: 'If yes, you might still qualify as a BFR, but most likely you do not qualify.',
  answers:  [YES, NO]
}];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayForm:  false,
      currQuestion: 1
    };
  }

  getMyResults = () => {
    this.setState({ displayForm: true }); 
  };

  render() {
    const { displayForm } = this.state;

    console.log(questions.length);

    return (
      <div className="App">
        <div className="App-header">
          <h2>FEIE Checker</h2>
        </div>
        <div className="App-content">
          { displayForm ? '' : <TitleCard onClick={ this.getMyResults } /> }
        </div>
        <div className="App-footer">
          <hr />
          <span>Copyright 2017</span>
        </div>
     </div>
    );
  }
}

export default App;
