import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {post:'Hello, World', likeValue:5},
  {post:"It's my first post", likeValue:4},
  {post:"It's my first post", likeValue:7},
]

let dialogs = [
  {id:1, name:'Sasha'},
  {id:2, name:'Gleb'},
  {id:3, name:'Vlad'},
  {id:4, name:'Misha'},
  {id:5, name:'Kostya'},
  {id:6, name:'Vova'},
  {id:7, name:'Valera'},
  {id:8, name:'Sasha'}
]

let messages = [
  {id:1, message:'I'},
  {id:2, message:"don't"},
  {id:3, message:'even'},
  {id:4, message:'know'},
  {id:5, message:'who'},
  {id:6, message:'i'},
  {id:7, message:'am'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();