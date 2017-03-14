export const findFriendship = friendUserId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${friendUserId}/friendships`
  })
);

export const createFriendship = friendUserId => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${friendUserId}/friendships`
  })
);

export const removeFriendship = friendshipId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/friendships/${friendshipId}`
  })
);

export const acceptFriendship = friendshipId => (
  $.ajax({
    method: 'PATCH',
    url: `/api/friendships/${friendshipId}`
  })
);

// export const findFriendRequests = () => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/friendships'
//   })
// );
