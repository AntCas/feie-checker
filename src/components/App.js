import React, { Component } from 'react';

import AnalysisCard from './analysis-card';
import FormCard from './form-card';
import TitleCard from './title-card';
import TermsOfService from './terms-of-service';

import logo from '../img/logo.svg';

import './reset.css';
import './App.css';

/* Questions */
const TIME_TEST     = 'time-test',
      PRESENCE      = 'presence',
      GOV_JOB       = 'government-job',
      FOR_HOUSING   = 'foreign-housing',
      FOR_FAMILY    = 'foreign-family',
      STATEMENT     = 'statement',
      FOR_TAX       = 'foreign-taxes',
      WORK_CONTRACT = 'work-contract',
      VISA          = 'visa',
      VISA_LIMIT    = 'visa-limit',
      USA_HOME      = 'usa-home',
      USA_FAMILY    = 'usa-family';

/* Answers */
const YES             = 'Yes',
      NO              = 'No',
      PURCHASED_HOUSE = 'Purchased House',
      RENTED_HOUSE    = 'Rented House or Apartment',
      RENTED_ROOM     = 'Rented Room',
      EMPLOYER        = 'Quarters Furnished by Employer',
      YES_AND_CITIZEN = 'Yes and one or more are citizens of host country',
      STUDENT_VISA    = 'Student Visa',
      TEMPORARY_VISA  = 'Temporary Work Visa',
      WORK_VISA       = 'Work Visa',
      PERM_RESIDENT   = 'Permanent Resident',
      DUAL_CITIZEN    = 'Dual Citizenship',
      NO_VISA         = 'No Visa',
      OTHER           = 'Other';

/* Special Weights */
const PASS = 'pass',
      FAIL = 'fail';

const questions = [{
  testName: TIME_TEST,
  question: 'Will you spend at least a year living outside of the USA?',
  helpText: 'You must live outside the US for 12 consecutive months in order to qualify.',
  answers:  {[YES]: 0, [NO]: FAIL}
}, {
  testName: PRESENCE,
  question: 'Will you spend fewer than 35 days in the US?',
  helpText: 'If you answer yes, then you qualify under the Physical Presence Test. Otherwise, you may still qualify under the Bona Fide Residence test. Keep in mind that your time abroad does not include travel over international waters lasting more than 24 hours.',
  answers:  {[YES]: PASS, [NO]: 0}
}, {
  testName: GOV_JOB,
  question: 'Do you work for the US Government or Military?',
  helpText: 'If you are living in the foreign country as part of a government contract or stationed there as part of the armed forces, then you do not qualify as a bona fide resident.',
  answers:  {[YES]: FAIL, [NO]: 0}
}, {
  testName: FOR_HOUSING,
  question: 'What is you housing situation?',
  helpText: 'Purchasing a home is best and renting is acceptable, but if you have free housing through an employer then you do not qualify as a bona fide resident of a foreign country.',
  answers: {[PURCHASED_HOUSE]: 5, [RENTED_HOUSE]: 1, [RENTED_ROOM]: 0, [EMPLOYER]: FAIL}
}, {
  testName: FOR_FAMILY,
  question: 'Did any of your family live with you abroad during any part of the tax year?',
  helpText: "Answering yes here is very good, especially if any of them are citizens of the foreign country in which you're living.",
  answers:  {[YES_AND_CITIZEN]: 5, [YES]: 3, [NO]: 0}
}, {
  testName: STATEMENT,
  question: 'Have you submitted a statement to the foreign country that you are not a resident of that country?',
  helpText: 'The answer to this question must be "No" in order to qualify as a bona fide resident.',
  answers:  {[YES]: FAIL, [NO]: 0}
}, {
  testName: FOR_TAX,
  question: 'Are you required to pay income tax to the country where you claim bona fide residence?',
  helpText: '“Yes” is better here, but if you live in a country with no income tax then the answer is “No”.',
  answers:  {[YES]: 2, [NO]: 0}
}, {
  testName: WORK_CONTRACT,
  question: 'Is your work contract based for a specific period of time?',
  helpText: 'In general, if your contract is for a finite length of time you will not qualify you as a bona fide resident.',
  answers:  {[YES]: -1, [NO]: 2}
}, {
  testName: VISA,
  question: 'What visa did you use to enter the foreign country?',
  helpText: 'If you hold a student visa or a temporary work visa then you are most likely not a bona fide resident. If you are a permanent resident or a dual citizen then you most likely qualify regardless of other factors.',
  answers:  {[STUDENT_VISA]: -5, [TEMPORARY_VISA]: -5, [WORK_VISA]: 1, [PERM_RESIDENT]: 5, [DUAL_CITIZEN]: 5, [NO_VISA]: 0, [OTHER]: 0}
}, {
  testName: VISA_LIMIT,
  question: 'Does your visa limit the length of your stay or employment in a foreign country?',
  helpText: 'If your visa limits your length of stay, then you do not qualify under bona fide residence status. If you can easily renew your visa, answer "No".',
  answers:  {[YES]: FAIL, [NO]: 0}
}, {
  testName: USA_HOME,
  question: 'Did you maintain a home in the United States while living abroad?',
  helpText: 'Answering “Yes” does not disqualify you, but “No” is better.',
  answers:  {[YES]: -1, [NO]: 1}
}, {
  testName: USA_FAMILY,
  question: 'If you answered "Yes" to the previous, do any of your family members live there? Otherwise, answer "No".',
  helpText: 'You are much less likely to qualify as a bona fide resident if so.',
  answers:  {[YES]: -5, [NO]: 1}
}];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayForm:        false,
      displayAnalysis:    false,
      currQuestion:       0,
      showTermsOfService: false
    };
  }

  getMyResults = () => {
    this.setState({ displayForm: true }); 
  };

  nextQuestion = (response) => {
    /* TODO: Put all the logic in here around follow up questions and weighing answers */
    const { currQuestion } = this.state;

    questions[currQuestion]['response'] = response;

    if (currQuestion < questions.length - 1) {
      this.setState({ currQuestion: currQuestion + 1 });
    } else {
      this.setState({
        displayForm:     false,
        displayAnalysis: true
      });
    }
  }

  prevQuestion = () => {
    const { currQuestion } = this.state;

    // Clear responses as you go backwards through the form
    questions[currQuestion]['response'] = null;

    this.setState({
      displayForm:  currQuestion === 0 ? false : true,
      currQuestion: currQuestion === 0 ? 0 : currQuestion - 1
    });
  }

  startOver = () => {
    // Clear all responses
    questions.forEach(question => question.response = null);

    this.setState({
      displayAnalysis: false,
      currQuestion:    0
    });
  }
  
  toggleTermsOfService = () => {
    this.setState({
      showTermsOfService: !this.state.showTermsOfService
    });
  }

  render() {
    const {
      displayForm,
      displayAnalysis,
      currQuestion,
      showTermsOfService
    } = this.state;

    const questionCounter = `Question ${currQuestion + 1} of ${questions.length}`,
          percentComplete = (displayForm || displayAnalysis ? (((currQuestion + 1)/questions.length) * 100) : 0) + '%';

    let appContent;

    if (showTermsOfService) {
      appContent = <TermsOfService hideTerms={ this.toggleTermsOfService } />
    } else if (displayForm) {
      appContent = <FormCard content={ questions[currQuestion] }
                      onNext={ this.nextQuestion }
                      onBack={ this.prevQuestion }
                      isLast={ currQuestion === questions.length - 1 } />;
    } else if (displayAnalysis) {
      appContent = <AnalysisCard onSubmit={ this.startOver }
                      results={ questions }
                      toggleTermsOfService={ this.toggleTermsOfService } />;
    } else {
      appContent = <TitleCard onSubmit={ this.getMyResults } />;
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} alt='' />
          <h1>FEIE Test</h1>
          <a href="https://medium.com/@anthonycastrio/how-to-pay-no-united-states-income-tax-while-traveling-the-world-2e6aaac69299">What is the foreign earned income exemption?</a>
        </div>
        <div className={ `question-counter ${displayForm || displayAnalysis ? '' : 'hide'}` }>
          <span>{ `${displayAnalysis ? 'Analysis' : questionCounter}`  }</span>
        </div>
        <div className="progress-bar">
          <div className='indicator' style={{ width: percentComplete }}></div>
        </div>
        <div className="App-content">
          { appContent }
        </div>
        <div className="App-footer">
          <hr />
          <div className="footer-content">
            <span>Copyright 2017 &copy;</span>
            <a href="https://formico.io/">Formico LLC</a>
            <a onClick={ this.toggleTermsOfService }>Terms of Service</a>
          </div>
        </div>
     </div>
    );
  }
}

export default App;
