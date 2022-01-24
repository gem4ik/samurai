import React, { Component } from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map (p => <Post post={p.post} likeValue={p.likeValue}/>)

  return (
    <div>
      <div>
      <div>My Posts</div>
      </div>
      <div className={s.textarea}>
      <textarea></textarea>
      </div>
        <button className={s.button}>add post</button>
        <button className={s.button}>clear</button>
        <div>
        {postsElements}
        </div> 
    </div>
  );
}

export default MyPosts;