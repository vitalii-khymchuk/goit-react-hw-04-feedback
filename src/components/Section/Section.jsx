import { Box } from '../Box.styled';
import { Title } from './Section.styled';
import PropTypes from 'prop-types';

export default function Section({ children, title }) {
  return (
    <Box
      as="section"
      ml="15px"
      mt="15px"
      width="300px"
      p="4px"
      border="1px solid black"
      textAlign="center"
    >
      {title && <Title>{title}</Title>}
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
