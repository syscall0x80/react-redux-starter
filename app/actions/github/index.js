import 'whatwg-fetch';

export const GET_USER_INFO = 'GET_USER_INFO';

const receiveUserInfo = (info) => {
  return {
    type: GET_USER_INFO,
    userInfo: info,
  }
};

export const getUserInfo = (name) => {
  return dispatch => {
    return fetch(`https://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUserInfo(json)))
  }
};
