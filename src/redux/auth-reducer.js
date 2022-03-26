import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
const actionCreatorSetUserData = (userID, login, email, isAuth) => { return { type: SET_USER_DATA, payload: { userID, login, email, isAuth } } }


export const authThunkCreator = () => (dispatch) => {
 return authAPI.auth().then((respons) => {
    if (respons.data.resultCode === 0) {
      let { id, email, login } = respons.data.data;
      dispatch(actionCreatorSetUserData(id, login, email, true))
    }else{
      dispatch(actionCreatorSetUserData(null, null, null, false))
    }
  })
}

export const LoginThunkCreator = (obj) => (dispatch) => {
  authAPI.login(obj.email, obj.password, obj.rememberMe)
    .then((respons) => {
      if (respons.data.resultCode === 0) {
        dispatch(authThunkCreator())
      }
    })
}

export const LogoutThunkCreator = () => (dispatch) => {
  authAPI.logout()
    .then((respons) => {
      if (respons.data.resultCode === 0) {
        dispatch(authThunkCreator())
      }
    })
}

export default authReducer;