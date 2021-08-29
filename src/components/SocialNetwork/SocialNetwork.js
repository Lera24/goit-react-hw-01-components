import PropTypes from 'prop-types';
import scc from './SocialNetwork.module.css';

{
  /*Task 1*/
}

function SocialNetwork({ name, tag, location, avatar, stats }) {
  return (
    <div className={scc.profile}>
      <div className={scc.description}>
        <img src={avatar} alt="Аватар пользователя" className={scc.avatar} />
        <p className={scc.name}>{name}</p>
        <p className={scc.tag}>{'@' + tag}</p>
        <p className={scc.location}>{location}</p>
      </div>

      <ul className={scc.stats}>
        <li>
          <span className={scc.label}>Followers</span>
          <span className={scc.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={scc.label}>Views</span>
          <span className={scc.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={scc.label}>Likes</span>
          <span className={scc.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

SocialNetwork.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  ),
};

export default SocialNetwork;
