import styled from '@emotion/styled';

export const ControlItem = styled.li`
  list-style: none;
  margin-right: 4px;
`;

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0;
`;

export const Button = styled.button`
  width: 80px;
  height: 20px;
  border-radius: 50px;
  border: 1px solid black;
  &:hover,
  &:focus {
    color: orange;
    border-color: orange;
  }
`;
