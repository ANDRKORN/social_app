import { connect } from 'react-redux';
import { actionCreatorAddPost } from '../../../redux/profile-reduce';
import MyPosts from './MyPosts';

let mapDispachToProps=(dispatch)=>{
  return{
    newPostContainer : (textPost) => {    
      dispatch(actionCreatorAddPost(textPost));
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