import PropTypes from 'prop-types';
import { StatList, StatItem } from './Statistics.styled';

export default function Statistics({ statData, total, positive }) {
  return (
    <>
      {/* Тепер ця штука маштабуєма)) */}
      <StatList>
        {Object.entries(statData).map(item => {
          const statName = item[0];
          const statValue = item[1];
          return (
            <StatItem key={statName}>
              <span>{statName}:</span> {statValue}
            </StatItem>
          );
        })}
      </StatList>
      <StatList>
        <StatItem>
          <span>Total:</span> {total}
        </StatItem>
        <StatItem>
          <span>Positive:</span> {positive}%
        </StatItem>
      </StatList>
    </>
  );
}

Statistics.propTypes = {
  statData: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
