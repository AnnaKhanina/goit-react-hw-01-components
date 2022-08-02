import styled from 'styled-components';

export const Table = styled.table`
  margin: 20px auto 0 auto;
  width: 500px;

  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 5px;
  background-color: #fafafa;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const TableHead = styled.tr`
  height: 40px;
  background-color: #18E9FF;
  text-align: center;
  text-transform: uppercase;
  color: white;

  th {
    width: calc(100% / 3);

    :not(:last-child) {
      border-right: 1px solid #9B9E9E;
    }
  }
`;

export const TableItem = styled.tr`
  height: 40px;
  text-align: center;
  text-transform: capitalize;

  &:nth-child(even) {
    background-color: #CED6D7;
  }

  td {
    :not(:last-child) {
      border-right: 1px solid #079aab;
    }
  }
`;