import React from 'react';
import prof_style from './Profile.module.css';
import MyPosts from './My_posts/MyPosts';
const Profile = (props) => { 
  return <div className={prof_style.content}>
    <div>
      <img alt='' src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
    </div>
    <MyPosts dispatch={props.dispatch}
     textPost={props.textPost} 
     posts={props.posts} 
     />
  </div>
}

export default Profile;