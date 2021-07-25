import React from 'react';
import { actionCreatorAddPost, actionCreatorUpdateTextNewPost } from '../../../redux/profile-reduce';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => { 
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
}
export default MyPostsContainer;