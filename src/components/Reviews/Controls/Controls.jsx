import PropTypes from 'prop-types';
import { ControlItem, ButtonsList, Button } from './Controls.styled';

export default function Controls({ onLeaveFeedback, options }) {
  return (
    <ButtonsList>
      {options.map(item => (
        <ControlItem key={item}>
          <Button type="button" onClick={() => onLeaveFeedback(item)}>
            {item}
          </Button>
        </ControlItem>
      ))}
    </ButtonsList>
  );
}

Controls.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
