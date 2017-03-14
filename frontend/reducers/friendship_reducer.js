import { RECEIVE_FRIEND } from '../actions/friendship_actions';

const FriendshipReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_FRIEND:
      return action.friend;
    default:
      return state;
  }
};

export default FriendshipReducer;
