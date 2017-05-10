export const getPosts = (posts) => {
	return Object.keys(posts).length === 0 ? [] : posts;
};

export const getPost = (posts, postId) => (
	getPosts(posts).find(post => post.id === postId)
);
