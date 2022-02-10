import React from 'react';
import prof_style from './Profile.module.css';
import MyPostsContainer from './My_posts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {  
  return <div className={prof_style.content}>    
    <ProfileInfo status={props.status} isLoad={props.isLoad} profile={props.profile} updateUsersStatusThunkCreator={props.updateUsersStatusThunkCreator}/>
    <MyPostsContainer/>
  </div>
}

export default Profile;