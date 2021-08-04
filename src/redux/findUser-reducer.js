const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET_USERS';
let initialState = {
    users: [],
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
            return{...state,users:[...state.users,...action.users]}     
        default:           
            return state;
    }
}

export const actionCreatorFollow = (userID) => { return { type: FOLLOW,userID }};
export const actionCreatorUnfollow = (userID) => { return { type: UNFOLLOW,userID }};
export const actionCreatorSetUsers = (users) => { return { type: SET_USERS,users:users}}
 
export default findUserPageReducer;
