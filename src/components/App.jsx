import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

import friends from 'data/friends.json';
import user from 'data/user.json';
import data from 'data/data.json';

export const App = () => {
  return (
    <div
      style={{
        padding: '20px',
        margin: '0 auto',
        width: '1170px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />
    </div>
  );
};
