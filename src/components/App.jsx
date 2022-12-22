// Место начала рендера и внесения в него пропсов

// импорт компонентов
import { UserProfile } from './userProfile';
import { StatisticsList } from './statisticsList';
import { FriendList } from './friends/friendList';
import { TransactionsHistory } from './transactions';

// импорт данных с бекенда в json для использования как пропсов
import user from '../data/user.json';
import data from '../data/data.json';
import friendsData from '../data/friends.json';
import transactionsData from '../data/transactions.json';

// ThemeProvider - переменные
import { ThemeProvider } from '@emotion/react';
import { theme } from '../constants';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList stats={data} />
      <FriendList friends={friendsData} />
      <TransactionsHistory transactions={transactionsData} />
    </ThemeProvider>
  );
};
