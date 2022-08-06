import styled from 'styled-components';

export const Table = styled.table`
  margin: ${p => p.theme.space[5]}px ${p => p.theme.space[9]} ${p => p.theme.space[0]} ${p => p.theme.space[9]};
  width: ${p => p.theme.sizes.l};

  border-collapse: ${p=>p.theme.collapse.col};
  border-spacing: 0;
  border-radius: ${p=>p.theme.radii.s};
  background-color: ${p=>p.theme.colors.mainBackgroundColor};
  box-shadow: ${p=>p.theme.boxShadow.main}; 
  overflow: hidden;
`;

export const TableHead = styled.tr`
  height: 40px; 
  text-align: center;
  text-transform: uppercase;
  background-color: ${p=>p.theme.colors.tableBackgroundColor};
  color: ${p=>p.theme.colors.main};

  th {
    width: calc(100% / 3);

    :not(:last-child) {
      border-right: ${p=>p.theme.borders.normal} ${p=>p.theme.colors.tableColumnColor};
    }
  }
`;

export const TableItem = styled.tr`
  height: 40px;
  text-align: center;
  text-transform: capitalize;

  &:nth-child(even) {
    background-color: ${p=>p.theme.colors.tableRowColor};
  }

  td {
    :not(:last-child) {
      border-right: ${p=>p.theme.borders.normal} ${p=>p.theme.colors.aqua};
    }
  }
`;