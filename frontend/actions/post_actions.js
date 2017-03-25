import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const DELETE_POST = "DELETE_POST";


export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const removePost = post => ({
  type: DELETE_POST,
  post
});

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

// export const findFriendship = friendUserId => dispatch => {
//   return FriendshipAPIUtil.findFriendship(friendUserId)
//     .then(friendship => dispatch(receiveFriendship(friendship))
//   );
// };
//

export const fetchWall = userId => dispatch => (
  PostAPIUtil.fetchWall(userId)
    .then(posts => dispatch(receivePosts(posts)))
);

export const fetchFeed = userId => dispatch => (
  PostAPIUtil.fetchFeed(userId)
    .then(posts => dispatch(receivePosts(posts)))
);

export const createPost = (postData, userId) => dispatch => (
  PostAPIUtil.createPost(postData, userId)
    .then(post => dispatch(receivePost(post)))
);

export const updatePost = (postData, postId) => dispatch => (
  PostAPIUtil.updatePost(postData, postId)
    .then(post => dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => (
  PostAPIUtil.deletePost(postId)
    .then(post => dispatch(removePost(post)))
);

// export const removeFriendship = friendshipId => dispatch => {
//   return FriendshipAPIUtil.removeFriendship(friendshipId)
//     .then(friendship => dispatch(receiveFriendship(null))
//   );
// };
//
// export const acceptFriendship = friendshipId => dispatch => {
//   return FriendshipAPIUtil.acceptFriendship(friendshipId)
//     .then(friendship => dispatch(receiveFriendship(friendship))
//   );
// };
