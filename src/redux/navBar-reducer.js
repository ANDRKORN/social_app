
const SET_FIRST_USERS = 'SET_FIRST_USERS';

let initialState = {
    users: [],    
};

const navBarPageReducer = (state = initialState, action) => {
    switch (action.type) {       
        case SET_FIRST_USERS:
            return { ...state, users: [...action.users] }       
        default:
            return state;
    }
}

export const actionCreatorSetFirstUsers = (users) => { return { type: SET_FIRST_USERS, users: users } }

export const setUsersThunkCreator=()=>(dispatch)=>{
    
}
export default navBarPageReducer;
