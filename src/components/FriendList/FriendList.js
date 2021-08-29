import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from '../FriendsListItem/FriendListItem';

{
  /*Task 3*/
}

function FriendList({ friends }) {
  return (
    <div className={css.friends}>
      <ul className={css.friendList}>
        {friends.map(friend => {
          return (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          );
        })}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      key: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
