import { usersAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userID:null,
    email:null,
    login:null,
    isAuth:false
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return{
        ...state,
        ...action.data,
        isAuth:true
      };
     
    default:
      return state;
  }
};
export const actionCreatorSetUserData = (data) => { return { type: SET_USER_DATA, data } }

export const authThunkCreator = () => (dispatch) =>{
  usersAPI.auth().then((respons)=>{if(respons.data.resultCode===0){
    dispatch(actionCreatorSetUserData(respons.data.data))
 }})
}
export default authReducer;