import dialogsPageReducer from "./dialogs-reduce";
import profilePageReducer from "./profile-reduce";

let store = {
  _state: {
    profilePage: {
      textPost: '',
      posts: [
        {
          post: 'hahaha',
          likes: 5,
          id: 0,
        },
        {
          post: 'whay',
          likes: 15,
          id: 1,
        },
        {
          post: 'im learn rect',
          likes: 100500,
          id: 2,
        },
        {
          post: 'hi',
          likes: 1,
          id: 3,
        },
      ],
    },
    dialogsPage: {
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
    }
  },
  _rerenderEntireTree() {
    console.log('state changed');
  },
  
  dispatch(action) {
    this._state.profilePage=profilePageReducer(this._state.profilePage, action);
    this._state.dialogsPage=dialogsPageReducer(this._state.dialogsPage, action);
    this._rerenderEntireTree(this._state);
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

};

window.store = store;
