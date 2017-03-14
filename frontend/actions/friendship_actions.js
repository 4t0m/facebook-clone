import * as FriendshipAPIUtil from '../util/friendship_api_util';

export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const RECEIVE_FRIENDSHIPS = "RECEIVE_FRIENDSHIPS";

export const receiveFriendship = friendship => ({
  type: RECEIVE_FRIENDSHIP,
  friendship
});

export const receiveFriendships = friendships => ({
  type: RECEIVE_FRIENDSHIPS,
  friendships
});

export const findFriendship = friendUserId => dispatch => {
  return FriendshipAPIUtil.findFriendship(friendUserId)
    .then(friendship => dispatch(receiveFriendship(friendship))
  );
};

export const createFriendship = friendUserId => dispatch => {
  return FriendshipAPIUtil.createFriendship(friendUserId)
    .then(friendship => dispatch(receiveFriendship(friendship))
  );
};

export const removeFriendship = friendshipId => dispatch => {
  return FriendshipAPIUtil.removeFriendship(friendshipId)
    .then(friendship => dispatch(receiveFriendship(null))
  );
};

export const acceptFriendship = friendshipId => dispatch => {
  return FriendshipAPIUtil.acceptFriendship(friendshipId)
    .then(friendship => dispatch(receiveFriendship(friendship))
  );
};
