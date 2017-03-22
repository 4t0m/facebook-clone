export const getPosts = (posts) => {
	let allPosts = Object.keys(posts).map(id => posts[id]);
	return allPosts.sort( (postA, postB) => postB.id - postA.id);
};

export const getPost = (posts, postId) => (
	getPosts(posts).find(post => post.id === postId)
);
