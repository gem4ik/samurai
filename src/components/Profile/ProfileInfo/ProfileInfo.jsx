import React, { Component } from 'react';
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.pic}> <img src='https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/2020-06/VC_Experiences_ReopeningBeaches_RF_1156532604_1280x640.jpg?itok=tPCjquVe'></img></div>
      <div className={style.descriprions}>ava+desc</div>
    </div>
  );
}

export default ProfileInfo;