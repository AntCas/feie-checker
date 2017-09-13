import React, { Component } from 'react';

import './style.css';

class Description extends Component {
  constructor(props) {
     super(props);

     this.state = {
       display: false
     };
  }

  // TIL that => notation takes care of this binding for you!
  // so no need to do this.toggleContent = this.toggleContent.bind(this) in the constructor!
  toggleContent = () => {
     this.setState({
       display: !this.state.display
     });
  }

  render() {
    const { display } = this.state;

    return (
      <div className={ `description ${display ? '' : 'hide'}` }>
        <h2>Take this test to see if you can save thousands on your income taxes this year living abroad</h2>
        <a onClick={ this.toggleContent }>{ `${display ? 'Less' : 'More'} Information` }</a>
        <div className="content">
          <h2>What is the FEIE?</h2>

          <p>The Foreign Earned Income Exemption, or FEIE, is a tax exemption provided by the IRS which exempts you from paying taxes on your first $106,000 in income while you are living abroad. (This number is adjusted for inflation each year).</p>

          <h2>What is this?</h2>

          <p>This form will help you determine whether you are likely to qualify for the FEIE and how much money you can save.</p>

          <p>If you do not qualify we will make suggestions for how you can change your situation so that you do.</p>

          <p>While we have made our best efforts to make sure the information contained here is up to date, we make no guarantees. All advice given here is taken at your own risk. By using this form you waive the right to sue us for using any of the information provided here.</p>

          <h2>How to qualify?</h2>

          <p>In order to qualify for the FEIE tax exemption you must live outside of the United States for a minimum of 12 months.</p>

          <p>If you the 12 month period overlaps two tax years, then the exemption will be split across two tax years.</p>

          <p>There are two tests which the IRS will use to determine whether you qualify. You must choose one test or the either, if you choose both the IRS will automatically reject you for the FEIE and will charge you fees and interest on the unpaid taxes.</p>
        </div>
      </div>
    );
  }
}

export default Description;
