import React, { Component } from 'react';
import Myposts from './MyPosts/MyPosts';
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const profile = (props) => {
  return (
    <div>
      <div><ProfileInfo /></div>
      <h3 className={style.posts}>
        <Myposts 
        posts={props.posts} 
        newPostText={props.newPostText}
        dispatch={props.dispatch}/>
        </h3>
    </div>
  );
}

export default profile;