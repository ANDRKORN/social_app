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
  getState() {
    return this._state;
  },
  addPost() {
    let newPost = {
      post: this.getState().profilePage.textPost,
      likes: 0,
      id: (this.getState().profilePage.posts.length),
    }
    this.getState().profilePage.textPost = '';
    this.getState().profilePage.posts.push(newPost);
    this._rerenderEntireTree(this.getState());
  },
  updateTextNewPost(newTextPost) {
    this.getState().profilePage.textPost = newTextPost;
    this._rerenderEntireTree(this.getState())
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  _rerenderEntireTree() {
    console.log('state changed');
  },
};
export default store;