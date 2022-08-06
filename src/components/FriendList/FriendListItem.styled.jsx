import styled from 'styled-components';


export const FriendItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  align-content: center;
  overflow: hidden;
  padding: ${p => p.theme.space[0]} ${p => p.theme.space[5]}px;
  width: ${p => p.theme.sizes.all};
  height: ${p => p.theme.sizes.s};
  background-color: ${p=>p.theme.colors.mainBackgroundColor};
  border-radius: ${p=>p.theme.radii.s};
  box-shadow: ${p=>p.theme.boxShadow.main};  

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
  
export const Status = styled.span`
  width: ${p => p.theme.sizes.xxs};
  height: ${p => p.theme.sizes.xxs};
  border-radius: ${p=>p.theme.radii.round};
  background-color: ${({theme, isOnline})=> {
    return isOnline ? theme.colors.green : theme.colors.red;
    }};
`;

export const Avatar = styled.img`
  margin-left: ${p => p.theme.space[4]}px;
  width: ${p => p.theme.sizes.xs};
  border-radius: ${p=>p.theme.radii.s};
`;

export const Name = styled.p`
  margin-left: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;