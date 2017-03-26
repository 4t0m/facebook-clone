import { CREATE_POST, RECEIVE_POSTS, RECEIVE_POST, DELETE_POST }
  from '../actions/post_actions';
import merge from 'lodash/merge';

const PostReducer = (state = {}, action) => {
  Object.freeze(state);
  let newPosts;
  let deleteIndex;
  switch(action.type){
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      newPosts = Object.assign({}, state);
      deleteIndex = Object.keys(newPosts).find(key => (
        newPosts[key].id === action.post.id
      ));
      delete newPosts[deleteIndex];
      return Object.assign({}, newPosts, {[action.post.id]: action.post});
    case DELETE_POST:
      newPosts = Object.assign({}, state);
      deleteIndex = Object.keys(newPosts).find(key => (
        newPosts[key].id === action.post.id
      ));
      delete newPosts[deleteIndex];
      return newPosts;
    default:
      return state;
  }
};

export default PostReducer;
