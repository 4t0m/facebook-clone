import { RECEIVE_FRIENDSHIP } from '../actions/friendship_actions';

const FriendshipReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_FRIENDSHIP:
      return action.friendship;
    default:
      return state;
  }
};

export default FriendshipReducer;
