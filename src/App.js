import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialog/*" element={<Dialogs
              dialogs={props.Data.Message.dialogs}
              messages={props.Data.Message.messages} />}>
            </Route>
            <Route path="/profile/*" element={<Profile
              posts={props.Data.Profile.posts}
              addPost={props.addPost} 
              newPostText={props.Data.Profile.newPostText}
              updateTextValue={props.updateTextValue}
              />}>
            </Route>
            <Route path="/news/*" element={<News />}></Route>
            <Route path="/music/*" element={<Music />}></Route>
            <Route path="/settings/*" element={<Settings />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
  
}

export default App