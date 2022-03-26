import { createSelector } from "reselect";

export const getUser = (state) => {
    return state.findUsersPage.users;
}

export const getAllUsers = (state) => {
    return state.findUsersPage.allUsers;
}

export const selectorGetUsers = createSelector(
    getAllUsers,
    (state) => state.findUsersPage.allUsers)

export const getCountPage = (state) => {
    return state.findUsersPage.countPage;
}

export const getCount = (state) => {
    return state.findUsersPage.count;
}


