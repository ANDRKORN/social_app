import { combineReducers, createStore } from "redux";
import dialogsPageReducer from "./dialogs-reduce";
import profilePageReducer from "./profile-reduce";
import findUserPageReducer from "./findUser-reducer"

let redusers = combineReducers(
    {
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer,
        findUsersPage:findUserPageReducer,
              
    }
);

let store = createStore(redusers);
export default store;