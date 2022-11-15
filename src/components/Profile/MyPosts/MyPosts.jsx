import React, { Component } from 'react';
import style from './MyPosts.module.css'
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
      <div className={style.textarea}>
        <textarea ref={newPostElement} onChange={onPostChange} className={style.textitem}></textarea>
      </div>
      <button className={style.button} onClick={ ButtonAddPost }>add post</button>
      <button className={style.button}>clear</button>
      <div>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;