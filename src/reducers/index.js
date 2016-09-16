// ROOT REDUCER
import * as types from '../actions/actionTypes';

const rootReducer = (state = {}, action) => {
  console.log(0);
  switch (action.type) {
    case types.LOAD_PROJECT_MEMBERS_SUCCESS:
      console.log(1);
      return Object.assign({}, state, {projectMembers: action.members});
    default:
    return state;
  }
};

export default rootReducer;
