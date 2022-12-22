import PropTypes from 'prop-types';
import defaultImage from './logo192.png';
import {
  FriendCatalogItem,
  Status,
  FriendImage,
  FriendName,
} from '../friendList/FriendList.styled';

export const FriendListItem = ({
  avatar = defaultImage,
  name = 'unknown',
  isOnline = 'unknown',
}) => {
  return (
    <FriendCatalogItem>
      <span>
        <Status isOnline={isOnline} />
      </span>
      <FriendImage src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendCatalogItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
