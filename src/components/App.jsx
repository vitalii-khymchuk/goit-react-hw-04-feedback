import React, { Component } from 'react';
import Statistics from './Reviews/Statistics';
import Controls from './Reviews/Controls';
import Section from 'components/Section/';
import Notification from './Reviews/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseRating = grade => {
    this.setState(prevState => ({
      [grade]: prevState[grade] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const goodGrades = this.state.good;
    const totalGrades = this.countTotalFeedback();
    return totalGrades === 0 ? 0 : Math.round((goodGrades / totalGrades) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    const isAnyGrades = Object.values(this.state).reduce(
      (acc, item) => acc + item,
      0
    );

    return (
      <>
        <Section title="Statistics">
          {!isAnyGrades ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              statData={this.state}
              total={total}
              positive={positive}
            />
          )}
        </Section>
        <Section title="Please leave feedback">
          <Controls onLeaveFeedback={this.increaseRating} options={options} />
        </Section>
      </>
    );
  }
}
