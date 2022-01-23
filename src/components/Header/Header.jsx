import React, { Component } from 'react';
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <div >
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/200px-Linkedin.svg.png'></img>
      </div>
    </header>
  );
}

export default Header;