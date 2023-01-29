import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Section, FriendListStyle, FriendTitle } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      <FriendTitle>USER'S FRIENDS</FriendTitle>
      <FriendListStyle>
        {friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              id={id}
            />
          );
        })}
      </FriendListStyle>
    </Section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
