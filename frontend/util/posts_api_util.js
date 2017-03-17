export const fetchWall = userId => (
  $.ajax({
    type: "GET",
    url: `/api/users/${userId}/posts?collection=wall`
  })
);

export const fetchFeed = userId => (
  $.ajax({
    type: "GET",
    url: `/api/users/${userId}/posts?collection=feed`
  })
);

// export const fetchOwnPosts = userId => (
//   $.ajax({
//     type: "GET",
//     url: `/api/users/${userId}/posts?collection=own`
//   })
// );


export const createPost = post => (
  $.ajax({
    type: 'POST',
    url: `/api/posts`,
    data: { post }
  })
);


export const updatePost = (id, data) => (
  $.ajax({
    type: 'PATCH',
    url: `/api/posts/${id}`,
    data,
    processData: false,
    contentType: false
  })
);

export const deletePost = id => (
  $.ajax({
    type: "DELETE",
    url: `/api/posts/${id}`
  })
);
