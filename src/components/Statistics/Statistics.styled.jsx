import styled from 'styled-components';
import getRandomColor from 'components/RandomColor/RandomColor';

export const Container = styled.section`
  margin: 20px auto 0 auto;
  width: 500px;
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const Title = styled.h2`
  padding: 30px 0;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
  background-color: ${getRandomColor};
`;

export const Label = styled.span``;

export const Percentage = styled.span`
  font-size: 16px;
`;