import * as actionTypes from './actionTypes';


export const setLoginStatus  = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
          token: localStorage.getItem('token'),
          user: localStorage.getItem('user')
        }
      }
};



export const Logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
};


