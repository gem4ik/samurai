import React, { Component } from 'react';
import style from './Post.module.css'

const Post = (props) => {
  return (
      <div>
          <div className={style.name}>
            <img src='https://wow.zamimg.com/uploads/screenshots/small/661512.jpg'></img>
            { props.post }</div>
            <a href='#'> { props.likeValue } likes</a>
      </div>
  );
}

export default Post;