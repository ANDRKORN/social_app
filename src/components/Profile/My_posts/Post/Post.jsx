import React from 'react';
import post_style from './Post.module.css';
const Post = (props) => {
  return <div className={post_style.item} key={props.key}>
    <img src="https://uprostim.com/wp-content/uploads/2021/03/image086-77.jpg" alt="" />
    {props.post}
    <div>
      <span>like</span> {props.likes}
    </div>
  </div>


}
export default Post;