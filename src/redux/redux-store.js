import { combineReducers, createStore } from "redux";
import dialogsPageReducer from "./dialogs-reduce";
import profilePageReducer from "./profile-reduce";
import findUserPageReducer from "./findUser-reducer"
import authReducer from "./auth-reducer";

let redusers = combineReducers(
    {
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer,
        findUsersPage:findUserPageReducer,
        authUser:authReducer              
    }
);

let store = createStore(redusers);
window.store=store;
export default store;