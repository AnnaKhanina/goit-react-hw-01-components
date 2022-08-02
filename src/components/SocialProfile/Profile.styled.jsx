import styled from 'styled-components';

export const Card = styled.div`
  margin: 0 auto;
  width: 500px;
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 2px 3px 12px 2px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

export const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #E5CCFF;
`;

export const UserName = styled.p`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
`;

export const UserInfo = styled.p`
  margin-top: 8px;
  font-size: 16px;
  color: gray;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  width: 100%;
  background-color: #f0f0f0;
  :not(:last-child) {
    border-right: 1px solid #e1e1e1;
  }
`;

export const Label = styled.span`
  color: gray;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700;
`;