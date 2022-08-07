import styled from 'styled-components';
import getRandomColor from 'components/RandomColor/RandomColor';

export const Container = styled.section`
  margin: ${p => p.theme.space[5]}px ${p => p.theme.space[9]} ${p => p.theme.space[0]} ${p => p.theme.space[9]};
  width: ${p => p.theme.sizes.l};
  background-color: ${p=>p.theme.colors.mainBackgroundColor};
  border-radius: ${p=>p.theme.radii.s};
  box-shadow: ${p=>p.theme.boxShadow.main};  
  overflow: hidden;
`;

export const Title = styled.h2`
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[0]};
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: ${p => p.theme.sizes.all};
  margin: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[0]};
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${p => p.theme.space[4]};px ${p => p.theme.space[0]};
  width: ${p => p.theme.sizes.all};
  background-color: ${getRandomColor};
  `;

export const Label = styled.span``;

export const Percentage = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
`;