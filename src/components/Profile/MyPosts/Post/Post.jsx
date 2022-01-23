import React, { Component } from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
      <div>
          <div className={s.name}><img src='https://wow.zamimg.com/uploads/screenshots/small/661512.jpg'></img>{ props.message }</div>
        <div><a href="#">{ props.likeValue }</a></div>
      </div>
  );
}

export default Post;