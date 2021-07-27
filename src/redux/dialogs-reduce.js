const UPDATE_TEXT_MESSAGE = 'UDATE-TEXT-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState= {
  textMessage: '',
  messegeItems: [
    {
      messege: 'hi',
      id: 0
    },
    {
      messege: 'how are you',
      id: 1
    },
    {
      messege: 'norm',
      id: 2
    },
    {
      messege: 'yes',
      id: 3
    },
  ],
  dialogItems: [
    {
      id: 0,
      name: 'liza',
    },
    {
      id: 1,
      name: 'andrey',
    },
    {
      id: 2,
      name: 'vova',
    },
    {
      id: 3,
      name: 'maks',
    },
  ],
};
const dialogsPageReducer = (state=initialState, action) => {
  
  switch (action.type) {
    case UPDATE_TEXT_MESSAGE:
      state.textMessage = action.newTextMessage;
      return state;
    case ADD_MESSAGE:
      let newMessage = {
        messege: state.textMessage,
        id: state.messegeItems.length,
      };
      state.messegeItems.push(newMessage);
      state.textMessage = '';
      debugger
      return state;
    default:
      return state;
  }  
};

export const actionCreatorUpdateTextMessage = (text) => { return { type: UPDATE_TEXT_MESSAGE, newTextMessage: text } }
export const actionCreatorAddMessage = () => { return { type: ADD_MESSAGE } }

export default dialogsPageReducer;