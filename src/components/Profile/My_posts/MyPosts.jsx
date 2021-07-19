import React from 'react';
import my_posts_style from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {
  let arrPost = props.posts.map((el) => (<Post post={el.post} likes={el.likes} key={el.id} />));
  let newText = React.createRef();
  const newPost = () => {
    let newTextPost = newText.current.value;   
    props.addPost(); 
  }
  const upNewTextPost=()=>{
    let newTextPost=newText.current.value
    props.updateTextNewPost(newTextPost);   
  }
  return <div className={my_posts_style.content}>
    <div>
      ava+descrip
    </div>
    <div>
      MY POSTS
      <div>
        <textarea name="" id="" cols="10" rows="1" ref={newText} onChange={upNewTextPost}  value={props.textPost}/>
        <button onClick={newPost}>Add Post</button>
      </div>
      <div className={my_posts_style.posts}>
        {arrPost}
      </div>
    </div>
  </div>
}
export default MyPosts;