
const ADD_MESSAGE = 'ADD-MESSAGE';
let initialState = { 
  massegeItems: [
    {
      massege: 'hi',
      id: 0
    },
    {
      massege: 'how are you',
      id: 1
    },
    {
      massege: 'norm',
      id: 2
    },
    {
      massege: 'yes',
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
const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return  {
        ...state,
        massegeItems: [                  
          ...state.massegeItems ,
          {
            massege: action.textMassage,
            id: state.massegeItems.length,
          }
        ],
      };
    default:
      return state;
  }
};
export const actionCreatorAddMessage = (textMassage) => { return { type: ADD_MESSAGE, textMassage } }

export default dialogsPageReducer;