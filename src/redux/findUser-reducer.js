const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET_USERS';
let initialState = {
    users: [
        {
            nameUser: 'Dima',            
            location:{
               city: 'Rostov-on-Don',
            country: 'Russia',
            },
            status: 'learn React',             
            avatarUser: 'https://berserkon.com/images/avatar-vector.png',
            id: 0,
            followed:true,
        },
        {
            nameUser: 'Liza',
            location:{
                city: 'Rostov-on-Don',
             country: 'Russia',
             },
            status: 'learn Design',
            avatarUser: 'https://berserkon.com/images/avatar-vector.png',
            id: 1,
            followed:true,
        },
        {
            nameUser: 'Dima',
            location:{
                city: 'Rostov-on-Don',
             country: 'Russia',
             },
            status: 'learn it',
            avatarUser: "https://berserkon.com/images/avatar-vector.png",
            id: 2,
            followed:false,
        },
        {
            nameUser: 'Leha',
            location:{
                city: 'Rostov-on-Don',
             country: 'Russia',
             },
            status: 'good day',
            avatarUser: "https://berserkon.com/images/avatar-vector.png",
            id: 3,
            followed:true,
        },
    ],
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
export const actionCreatorSetUsers = (userID) => { return { type: SET_USERS}}

export default findUserPageReducer;
