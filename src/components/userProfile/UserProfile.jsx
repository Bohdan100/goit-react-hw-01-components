import PropTypes from 'prop-types';

import {
  Profile,
  UserCardDescription,
  UserCardAvatar,
  UserCardName,
  UserCardTag,
  UserCardLocation,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './UserProfile.styled';

import defaultImage from './logo192.png';

export const UserProfile = ({
  username = 'not found',
  tag = 'not found',
  location = 'not found',
  avatar = defaultImage,
  stats: { followers, views, likes } = 'not found',
}) => {
  return (
    <Profile key={tag}>
      <UserCardDescription>
        <UserCardAvatar src={avatar} alt="User avatar" />
        <UserCardName>{username}</UserCardName>
        <UserCardTag>@{tag}</UserCardTag>
        <UserCardLocation>{location}</UserCardLocation>
      </UserCardDescription>

      <StatsList>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </Profile>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
