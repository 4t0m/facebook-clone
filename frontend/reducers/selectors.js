export const getPosts = (posts) => (
	Object.keys(posts).map(id => posts[id])
);
