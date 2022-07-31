import user from 'components/SocialProfile/user.json';
import data from 'components/Statistics/data.json';
import friends from 'components/Friends/friends.json';
import transactions from 'components/Transactions/transactions.json';
import { Profile } from 'components/SocialProfile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendListItem } from 'components/Friends/FriendListItem';
import { TransactionHistory } from 'components/Transactions/TransactionHistory'; 
import { Container } from './App.styled.jsx';


export function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
