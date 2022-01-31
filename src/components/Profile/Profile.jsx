import React, { Component } from 'react';
import Myposts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <div><ProfileInfo /></div>
      <h3 className={s.posts}><Myposts posts={props.posts} addPost={props.addPost} /></h3>
    </div>
  );
}

export default Profile;