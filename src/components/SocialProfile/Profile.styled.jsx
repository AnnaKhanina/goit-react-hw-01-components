import styled from 'styled-components';

export const Card = styled.div`
  margin: ${p => p.theme.space[0]} ${p => p.theme.space[9]};
  max-width: ${p => p.theme.sizes.l};
  background-color: ${p=>p.theme.colors.mainBackgroundColor};
  border-radius: ${p=>p.theme.radii.s};
  box-shadow: box-shadow: ${p=>p.theme.boxShadow.main}; 
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[0]};
`;

export const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: ${p=>p.theme.radii.round};
  background-color: ${p=>p.theme.colors.ava};
`;

export const UserName = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const UserInfo = styled.p`
  margin-top: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.grey};
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: ${p => p.theme.sizes.all};
  margin: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[0]};
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[0]};
  width: ${p => p.theme.sizes.all};
  background-color: ${p=>p.theme.colors.profileBackgroundColor};
  :not(:last-child) {
    border-right: 1px solid #e1e1e1;
  }
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.grey};
`;

export const Quantity = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;