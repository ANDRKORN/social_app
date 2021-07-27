import React from 'react';
import { connect } from 'react-redux';
import { actionCreatorAddPost, actionCreatorUpdateTextNewPost } from '../../../redux/profile-reduce';
import MyPosts from './MyPosts';


/* const MyPostsContainer = (props) => { 
  const newPostContainer = () => {    
    props.store.dispatch(actionCreatorAddPost());
  }

  const onPostChange = (newTextPost) => {        
    props.store.dispatch(actionCreatorUpdateTextNewPost(newTextPost));    
  }

  return <MyPosts onPostChange={onPostChange} 
  newPostContainer={newPostContainer} 
  posts={props.store.getState().profilePage.posts}
  newTextPost={props.store.getState().profilePage.textPost}
  />
} */
let mapDispachToProps=(dispatch)=>{
  return{
    newPostContainer : () => {    
      dispatch(actionCreatorAddPost());
    },
    onPostChange : (newTextPost) => {        
     dispatch(actionCreatorUpdateTextNewPost(newTextPost));    
    },
  };
};
let mapStateToProps=(state)=>{
  return{
    posts:state.profilePage.posts,
    newTextPost:state.profilePage.textPost
  };
}
const MyPostsContainer=connect(mapStateToProps,mapDispachToProps)(MyPosts);
export default MyPostsContainer;