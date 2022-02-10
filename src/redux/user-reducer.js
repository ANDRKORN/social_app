import { usersAPI } from '../api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const TOGGLE_IS_FOLLOW = 'TOGGLE_IS_FOLLOW';
const SET_FOLLOWED ='SET_FOLLOWED';

let initialState = {
    userID:'',
    followed: false,
    isToggleFollow: [],
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FOLLOWED:
            return {
                ...state,
                followed: action.followed,
                userID: action.userID
            }
        case FOLLOW:            
            return {
                ...state,
                 followed: false//[...state.followed].filter(id=>id!==action.userID)
                };
        case UNFOLLOW:
            return {
                ...state,
                 followed: true//[...state.followed].push(action.userID)                     
            };
        case TOGGLE_IS_FOLLOW:
            const arr = [...state.isToggleFollow];
            arr.indexOf(action.isToggleFollow) === -1
                ? arr.push(action.isToggleFollow)
                : arr.splice(arr.indexOf(action.isToggleFollow), 1)
            return {
                ...state,
                isToggleFollow: arr
            }
        default:
            return state;
    }
}

export const actionCreatorFollow = (userID) => { return { type: FOLLOW, userID } };
export const actionCreatorUnfollow = (userID) => { return { type: UNFOLLOW, userID } };
export const actionCreatorSetToggleIsFollow = (isToggleFollow) => { return { type: TOGGLE_IS_FOLLOW, isToggleFollow } }
export const setFollowCreator = (followed, userID) => { return{ type: SET_FOLLOWED, followed, userID}}

export const unfollowedUserThunkCreator = (followed) => (dispatch) => {
    
    dispatch(actionCreatorSetToggleIsFollow(followed))
    dispatch(actionCreatorFollow(followed));
    dispatch(actionCreatorSetToggleIsFollow(followed))
    /*dispatch(actionCreatorSetToggleIsFollow(userID))
        usersAPI.Follow(userID).then((response) => {                  
          if (response.data.resultCode === 1) {
            dispatch(actionCreatorUnfollow(userID));
          }
          dispatch(actionCreatorSetToggleIsFollow(userID))                
        });*/
    };

export const followedUserThunkCreator = (userID) => (dispatch) => {
        dispatch(actionCreatorSetToggleIsFollow(userID))
        dispatch(actionCreatorUnfollow(userID));
        dispatch(actionCreatorSetToggleIsFollow(userID))
        /*
        usersAPI.Follow(userID).then((response) => {                  
          if (response.data.resultCode === 0) {
            dispatch(actionCreatorUnfollow(userID));
          }
          dispatch(actionCreatorSetToggleIsFollow(userID))                
        });*/
    };


export default UserReducer;

