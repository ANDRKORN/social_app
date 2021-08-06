const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET_USERS';
const SET_COUNT='SET_COUNT';
const SET_COUNT_PAGE='SET_COUNT_PAGE';
const SET_ALL_USERS='SET_ALL_USERS';

let initialState = {
    users: [],
    count:5,
    countPage:1,
    allUsers:0,
};

const findUserPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:        
           return{
               ...state, 
            users:state.users.map(u=>{
                if(u.id===action.userID){
                    return {...u,followed:false}
                }
                return u;
            })
        };   
        case UNFOLLOW:
           return{
               ...state, 
            users:state.users.map(u=>{
                if(u.id===action.userID){
                    return {...u,followed:true}
                }
                return u;
            })
        };    
        case SET_USERS:
            return{...state,users:[...action.users]}     
        case SET_COUNT:
            return {...state,count:action.count}
         case SET_ALL_USERS:
             return{...state,allUsers:action.allUsers}
        case SET_COUNT_PAGE:
            return{...state,countPage:action.countPage}
        default:           
            return state;
    }
}

export const actionCreatorFollow = (userID) => { return { type: FOLLOW,userID }};
export const actionCreatorUnfollow = (userID) => { return { type: UNFOLLOW,userID }};
export const actionCreatorSetUsers = (users) => { return { type: SET_USERS,users:users}}

export const actionCreatorSetAllUsers = (allUsers) => { return { type: SET_ALL_USERS,allUsers}}
 
export const actionCreatorSetCount = (count) => { return { type: SET_COUNT,count:count}}
 
export const actionCreatorSetCountPage = (countPage) => { return { type: SET_COUNT_PAGE,countPage:countPage}}
 
 
export default findUserPageReducer;
