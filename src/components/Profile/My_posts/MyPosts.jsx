import React from "react";
import my_posts_style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";

const PostForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit} action="">
      <div>
        <Field placeholder="text post" name='post_text' component={"input"}  />
      </div>      
      <div>
      <button type="submit" >Post</button>
      </div>
    </form>
  );
};

const PostReduxForm = reduxForm({ form: "post" })(PostForm);


const MyPosts = (props) => {
  let arrPost = props.posts.map((el,key=el.id) => (
    <Post post={el.post} likes={el.likes} key={key} />
  ));
 
  const newPost = (FormData) => {
    props.newPostContainer(FormData.post_text);
  };

  return (
    <div className={my_posts_style.content}>
      <div>
      <PostReduxForm onSubmit={newPost}/>
      </div>
      <div className={my_posts_style.posts} style={{}}>{arrPost}</div>
    </div>
  );
};
export default MyPosts;
