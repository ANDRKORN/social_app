import React from 'react';
import my_posts_style from './MyPosts.module.css';
import Post from './Post/Post'
const MyPosts = () => {
  return <div className={my_posts_style.content}>
    <div>
      ava+descrip
    </div>
    <div>
      MY POSTS
      <div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
       <button>Add Post</button>
      </div>
      <div className={my_posts_style.posts}>
        <Post messege={'hi, my bro'} likes='5'/>
      </div>
    </div>
  </div>
}
export default MyPosts;