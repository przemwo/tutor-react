import * as types from './actionTypes';
import projectMembersApi from '../api/mockProjectMembers';

export const loadProjectMembersSuccess = (members) => {
  return {
    type: types.LOAD_PROJECT_MEMBERS_SUCCESS,
    members
  };
};

export const loadProjectMembers = () => {
  return (dispatch) => {
    return projectMembersApi.getAllProjectMembers().then(members => {
      dispatch(loadProjectMembersSuccess(members));
    }).catch(error => {
      throw(error);
    });
  };
};
