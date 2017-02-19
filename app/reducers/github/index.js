import { GET_USER_INFO } from '../../actions/github';

const initialState = {
  userInfo: null,
  userList: [],
};

export default (state=initialState, action) => {
  switch(action.type) {
    case GET_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.userInfo,
        userList: state.userList.concat([action.userInfo]),
      });

    default:
      return state;
  }
}
