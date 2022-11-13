import React, { Component } from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = 
  props.posts.map(p => <Post post={p.post} likeValue={p.likeValue} />)

  let newPostElement = React.createRef()

  let ButtonAddPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)
    newPostElement.current.value = ''
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateTextValue(text)
  }
  
  return (
    <div>
        <div>My Posts</div>
      <div className={s.textarea}>
        <textarea ref={newPostElement} onChange={onPostChange} className={s.textitem}></textarea>
      </div>
      <button className={s.button} onClick={ ButtonAddPost }>add post</button>
      <button className={s.button}>clear</button>
      <div>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;