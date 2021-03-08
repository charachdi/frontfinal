import * as actionsTypes from '../actions/actionTypes';

const initialState = {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : undefined,
    user: localStorage.getItem('user') ? localStorage.getItem('user') : undefined
}


const authReducer = (state=initialState, action) => {
    switch(action.type){
        case actionsTypes.AUTH_SUCCESS: return action.payload;
        case actionsTypes.AUTH_LOGOUT: localStorage.removeItem('token'); localStorage.removeItem('user'); return initialState;
        default: return initialState;
    }
};

export default authReducer;