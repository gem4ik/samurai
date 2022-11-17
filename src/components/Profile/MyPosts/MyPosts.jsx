import React, { Component } from 'react';
import { updateTextValue } from '../../Data/Data';
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = 
  props.posts.map(p => <Post post={p.post} likeValue={p.likeValue} />)

  let newPostElement = React.createRef()

  let ButtonAddPost = () => {
    props.addPost()
  }
  
  let onPostChange = () => {
    let newText = newPostElement.current.value
    props.updateTextValue(newText)
  }
  
  return (
    <div>
        <div>My Posts</div>
      <div className={style.textarea}>
        <textarea ref={newPostElement} placeholder='your post' value={props.newPostText} onChange={onPostChange} className={style.textitem}/>
      </div>
      <button className={style.button} onClick={ ButtonAddPost }>add post</button>
      <div>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;