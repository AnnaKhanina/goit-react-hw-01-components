import styled from 'styled-components';

export const Container = styled.ul`
  margin: ${p => p.theme.space[4]}px ${p => p.theme.space[9]} ${p => p.theme.space[0]}px ${p => p.theme.space[9]};
  width: ${p=> p.theme.sizes.l};
  padding: ${p => p.theme.space[0]};
`;