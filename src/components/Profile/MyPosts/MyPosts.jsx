import React, { Component } from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
debugger
  let postsElements = 
  props.posts.map(p => <Post post={p.post} likeValue={p.likeValue} />)

  let textButton = React.createRef()

  let ButtonAddPost = () => {
    let text = textButton.current.value
    props.addPost(text)
    textButton.current.value = ''
  }

  return (
    <div>
      <div>
        <div>My Posts</div>
      </div>
      <div className={s.textarea}>
        <textarea ref={textButton}></textarea>
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