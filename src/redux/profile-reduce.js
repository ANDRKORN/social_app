import { usersAPI } from '../api/api'

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_NEW_POST = 'UPDATE-TEXT-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const IS_LOAD = 'IS_LOAD';

let initialState = {
  profile: null,
  textPost: '',
  isLoad: true,
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
      let textPost = state.textPost;
      let posts = { ...state.post }
      return {
        ...state,
        posts: [
          {
            post: textPost,
            likes: 0,
            id: posts.lenght,
          },
          ...state.posts,
        ],
        textPost: '',
      };
    case UPDATE_TEXT_NEW_POST:
      return {
        ...state,
        textPost: action.newTextPost,
      }
    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile
      }
    case IS_LOAD:
      return {
        ...state, isLoad: action.isLoad
      }
    default:

      return state;
  }
}
export const actionCreatorAddPost = () => { return { type: ADD_POST } };
export const actionCreatorUpdateTextNewPost = (text) => { return { type: UPDATE_TEXT_NEW_POST, newTextPost: text } }
export const actionCreatorSetUserProfile = (profile) => { return { type: SET_USER_PROFILE, profile } }
export const actionCreatorIsLoad = (isLoad) => { return { type: IS_LOAD, isLoad } };

export const getUsersThunkCreator = (userId) => (dispatch) => {
  let userID = 2;
  dispatch(actionCreatorIsLoad(true))
  usersAPI.getInfoUser(!userId ? userID : userID = userId).then((respons) => {
    dispatch(actionCreatorSetUserProfile(respons.data));
    dispatch(actionCreatorIsLoad(false));
  });
}

export default profilePageReducer;