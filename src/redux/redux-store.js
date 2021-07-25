import { combineReducers, createStore } from "redux";
import dialogsPageReducer from "./dialogs-reduce";
import profilePageReducer from "./profile-reduce";

let redusers = combineReducers(
    {
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer,
    }
);

let store = createStore(redusers);
console.log(store);
export default store;