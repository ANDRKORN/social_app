import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsPageReducer from "./dialogs-reduce";
import profilePageReducer from "./profile-reduce";
import findUserPageReducer from "./findUser-reducer"
import authReducer from "./auth-reducer";
import navBarPageReducer from "./navBar-reducer";
import thunk from 'redux-thunk'

let redusers = combineReducers(
    {
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer,
        findUsersPage: findUserPageReducer,
        authUser: authReducer,
        navbarPage: navBarPageReducer,            
    }
);

let store = createStore(redusers, applyMiddleware(thunk));
window.store=store;
export default store;