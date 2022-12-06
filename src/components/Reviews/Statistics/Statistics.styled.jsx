import styled from '@emotion/styled';

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100%;
  list-style: none;
  font-size: 14px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

export const StatItem = styled.li`
  & + & {
    margin-left: 8px;
  }
  list-style: none;
  font-size: 14px;
  & span {
    font-weight: 600;
  }
`;
