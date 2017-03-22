export const getPosts = (posts) => (
	Object.keys(posts).map(id => posts[id])
);

export const getPost = (posts, postId) => (
	getPosts(posts).find(post => post.id === postId)
);
