import React, { Component } from 'react';
import Myposts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div>
      <div><ProfileInfo /></div>
      <h3 className={s.posts}><Myposts /></h3>
    </div>
  );
}

export default Profile;