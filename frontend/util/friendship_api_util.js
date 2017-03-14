export const findFriend = (friendUserId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${friendUserId}/friendships`
  })
);

export const createFriend = (friendUserId) => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${friendUserId}/friendships`
  })
);

export const removeFriend = (friendshipId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/friendships/${friendshipId}`
  })
);

export const acceptFriend = (friendshipId) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/friendships/${friendshipId}`
  })
);

export const findFriendRequests = () => (
  $.ajax({
    method: 'GET',
    url: '/api/friendships'
  })
);
