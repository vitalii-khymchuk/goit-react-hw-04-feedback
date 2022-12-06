import React, { useState } from 'react';
import Statistics from './Reviews/Statistics';
import Controls from './Reviews/Controls';
import Section from 'components/Section/';
import Notification from './Reviews/Notification';

export default function App() {
  const [goodGrades, setGoodGrades] = useState(0);
  const [neutralGrades, setNeutralGrades] = useState(0);
  const [badGrades, setBadGrades] = useState(0);

  const increaseRating = grade => {
    switch (grade) {
      case 'good':
        setGoodGrades(grade => grade + 1);
        break;
      case 'neutral':
        setNeutralGrades(grade => grade + 1);
        break;
      case 'bad':
        setBadGrades(grade => grade + 1);
        break;
      default:
        console.log(`cant increase unknown grade`);
        break;
    }
  };

  const grades = { good: goodGrades, neutral: neutralGrades, bad: badGrades };
  const total = Object.values(grades).reduce((acc, item) => acc + item, 0);
  const positive = total === 0 ? 0 : Math.round((goodGrades / total) * 100);
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
