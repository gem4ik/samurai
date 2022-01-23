import React, { Component } from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
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
          <Post message='Hello, World' likeValue='8' />
          <Post message="It's my first post" likeValue='523'/>
        </div>
    </div>
  );
}

export default MyPosts;