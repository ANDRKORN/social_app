import React from 'react';
import my_posts_style from './MyPosts.module.css';
import Post from './Post/Post' 

const MyPosts = (props) => { 
  let arrPost=props.posts.map((el)=>(<Post post={el.post} likes={el.likes} key={el.id}/>));
  return <div className={my_posts_style.content}>
    <div>
      ava+descrip
    </div>
    <div>
      MY POSTS
      <div>
      <textarea name="" id="" cols="10" rows="1"></textarea>
       <button>Add Post</button>
      </div>
      <div className={my_posts_style.posts}>
        {arrPost}
      </div>
    </div>
  </div>
}
export default MyPosts;