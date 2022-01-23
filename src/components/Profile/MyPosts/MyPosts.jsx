import React, { Component } from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

let posts = [
  {post:'Hello, World', likeValue:3},
  {post:"It's my first post", likeValue:4},
  {post:"It's my first post", likeValue:7},
]

let postsElements = posts.map (p => <Post post={p.post} likeValue={p.likeValue}/>)

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
        {postsElements}
        </div>
    </div>
  );
}

export default MyPosts;