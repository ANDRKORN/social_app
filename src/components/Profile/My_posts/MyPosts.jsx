import React from "react";
import my_posts_style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let arrPost = props.posts.map((el,key=el.id) => (
    <Post post={el.post} likes={el.likes} key={key} />
  ));
  let newText = React.createRef();

  const newPost = () => {
    props.newPostContainer();
  };

  const upNewTextPost = () => {
    let newTextPost = newText.current.value;
    props.onPostChange(newTextPost);
  };

  return (
    <div className={my_posts_style.content}>
      <div>
        <textarea
          name=""
          id=""
          cols="10"
          rows="1"
          ref={newText}
          onChange={upNewTextPost}
          value={props.newTextPost}
        />
        <button onClick={props.newTextPost ? newPost : ()=>alert('пустой текст') }>Add Post</button>
      </div>
      <div className={my_posts_style.posts}>{arrPost}</div>
    </div>
  );
};
export default MyPosts;
