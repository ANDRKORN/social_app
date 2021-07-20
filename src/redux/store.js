const ADD_POST='ADD-POST';
const UPDATE_TEXT_NEW_POST='UPDATE-TEXT-NEW-POST';
const UPDATE_TEXT_MESSAGE='UDATE-TEXT-MESSAGE';
const ADD_MESSAGE='ADD-MESSAGE';
export const actionCreatorAddPost=()=>{return {type:ADD_POST}};
export const actionCreatorUpdateTextNewPost=(text)=>{return{type:UPDATE_TEXT_NEW_POST,newTextPost:text}}
export const actionCreatorUpdateTextMessage=(text)=>{return{type:UPDATE_TEXT_MESSAGE,newTextMessage:text}}
export const actionCreatorAddMessage=()=>{return{type:ADD_MESSAGE}}
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
      textMessage:'',
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
    if(action.type===ADD_POST){
      let newPost = {
        post: this.getState().profilePage.textPost,
        likes: 0,
        id: (this.getState().profilePage.posts.length),
      }
      this.getState().profilePage.textPost = '';
      this.getState().profilePage.posts.push(newPost);
      this._rerenderEntireTree(this.getState());
    }else if(action.type===UPDATE_TEXT_NEW_POST){     
      this.getState().profilePage.textPost = action.newTextPost;
      this._rerenderEntireTree(this.getState())
    }else if(action.type===UPDATE_TEXT_MESSAGE){     
        this.getState().dialogsPage.textMessage = action.newTextMessage;
        this._rerenderEntireTree(this.getState())
    }else if(action.type==='ADD-MESSAGE') {
      let newMessage={
        messege: this._state.dialogsPage.textMessage,
        id: this._state.dialogsPage.messegeItems.length,
      };
      this._state.dialogsPage.messegeItems.push(newMessage);
      this._rerenderEntireTree(this.getState())
    }    
  },

  getState() {
    return this._state;
  },
  
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

};
export default store;
window.store=store;
//old used metods
/* addPost() {
    let newPost = {
      post: this.getState().profilePage.textPost,
      likes: 0,
      id: (this.getState().profilePage.posts.length),
    }
    this.getState().profilePage.textPost = '';
    this.getState().profilePage.posts.push(newPost);
    this._rerenderEntireTree(this.getState());
  }, */
 /*  updateTextNewPost(newTextPost) {
    this.getState().profilePage.textPost = newTextPost;
    this._rerenderEntireTree(this.getState())
  }, */