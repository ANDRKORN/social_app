import { usersAPI, profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const IS_LOAD = 'IS_LOAD';
const SET_STATUS = `SET_STATUS`;

let initialState = {
  profile: null,
  textPost: '',
  isLoad: true,
  status: '',
  posts: [
    {
      post: 'hahaha',
      likes: 5,
      id: 0,
    },
    {
      post: 'whay',
      likes: 15,
      id: 1,
    },
    {
      post: 'im learn rect',
      likes: 100500,
      id: 2,
    },
    {
      post: 'hi',
      likes: 1,
      id: 3,
    },
  ],
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let posts = { ...state.post }
      return {
        ...state,
        posts: [
          {
            post: action.textPost,
            likes: 0,
            id: posts.lenght,
          },
          ...state.posts,
        ],
        textPost: '',
      };    
    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile
      }
    case IS_LOAD:
      return {
        ...state, isLoad: action.isLoad
      }
    case SET_STATUS:
      console.log(action.status)
      return {
        ...state, status: action.status
      }
    default:

      return state;
  }
}
export const actionCreatorAddPost = (textPost) => { return { type: ADD_POST, textPost } };
export const actionCreatorSetUserProfile = (profile) => { return { type: SET_USER_PROFILE, profile } }
export const actionCreatorIsLoad = (isLoad) => { return { type: IS_LOAD, isLoad } };
export const actionCreatorSetUserStatus = (status) => { return { type: SET_STATUS, status } }

export const getUsersThunkCreator = (userId) => (dispatch) => {
  let userID = 19045;
  dispatch(actionCreatorIsLoad(true))
  usersAPI.getInfoUser(!userId ? userID : userID = userId).then((respons) => {
    dispatch(actionCreatorSetUserProfile(respons.data));
    dispatch(actionCreatorIsLoad(false));
  });
}

export const getUsersStatusThunkCreator = (userID) => (dispatch) => {
  let userId = 19045;
  profileAPI.getStatusUserId(!userID ? userId : userId = userID).then((respons) => {
    dispatch(actionCreatorSetUserStatus(respons.data))
  });
}
export const updateUsersStatusThunkCreator = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((res) => {
    if(res.data.resultCode === 0){
      dispatch(actionCreatorSetUserStatus(status))
    }
  })
}


export default profilePageReducer;