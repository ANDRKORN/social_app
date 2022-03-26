import {} from '../api/api'
import { authThunkCreator } from './auth-reducer'
const SET_INITIALIZATED = 'SET_INITIALIZATED';

let initialState = {
  initializated: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZATED:
      return {
        ...state, initializated: true,
      }
    default:

      return state;
  }
}

export const actionCreatorSetInitializated = () => { return { type: SET_INITIALIZATED} }

export const SetInitializatedAppThunkCreator = () => async (dispatch) => {
    dispatch( await authThunkCreator())
    dispatch( await actionCreatorSetInitializated())    
}

export default appReducer;