const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_NEW_POST = 'UPDATE-TEXT-NEW-POST';

let initialState= {  
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
};

 const profilePageReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        post: state.textPost,
        likes: 0,
        id: (state.posts.length),
      }
      state.textPost = '';
      state.posts.push(newPost);
      return state;
    case UPDATE_TEXT_NEW_POST:
      state.textPost = action.newTextPost;
      return state;
    default:
      return state;
  }
}
export const actionCreatorAddPost = () => { return { type: ADD_POST } };
export const actionCreatorUpdateTextNewPost = (text) => { return { type: UPDATE_TEXT_NEW_POST, newTextPost: text } }

export default profilePageReducer;