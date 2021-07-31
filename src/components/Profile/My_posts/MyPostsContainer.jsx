import React from 'react';
import { connect } from 'react-redux';
import { actionCreatorAddPost, actionCreatorUpdateTextNewPost } from '../../../redux/profile-reduce';
import MyPosts from './MyPosts';

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