import React, { useState } from 'react';
import Statistics from './Reviews/Statistics';
import Controls from './Reviews/Controls';
import Section from 'components/Section/';
import Notification from './Reviews/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseRating = grade => {
    switch (grade) {
      case 'good':
        setGood(grade => grade + 1);
        break;
      case 'neutral':
        setNeutral(grade => grade + 1);
        break;
      case 'bad':
        setBad(grade => grade + 1);
        break;
      default:
        console.log(`cant increase unknown grade`);
        break;
    }
  };

  const grades = { good, neutral, bad };
  const total = Object.values(grades).reduce((acc, item) => acc + item, 0);
  const positive = Math.round((good / total) * 100) ?? 0;
  const options = Object.keys(grades);
  const isAnyGrades = Object.values(grades).reduce(
    (acc, item) => acc + item,
    0
  );

  return (
    <>
      <Section title="Statistics">
        {!isAnyGrades ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics statData={grades} total={total} positive={positive} />
        )}
      </Section>
      <Section title="Please leave feedback">
        <Controls onLeaveFeedback={increaseRating} options={options} />
      </Section>
    </>
  );
}
