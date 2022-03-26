import { usersAPI } from '../api/api'
const SET_FIRST_USERS = 'SET_FIRST_USERS';

let initialState = {
    isGetUsers: false,
    users: [],
};

const navBarPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIRST_USERS:
            return { ...state, users: [...action.users], isGetUsers: true, }
        default:
            return state;
    }
}

export const actionCreatorSetFirstUsers = (users) => { return { type: SET_FIRST_USERS, users: users } }

export const getFirstUsersThunkCreator = (countPage, count) => (dispatch) => {
    usersAPI.getUsers(countPage, count).then((data) => {
        dispatch(actionCreatorSetFirstUsers(data.items));
    });
}

export default navBarPageReducer;
