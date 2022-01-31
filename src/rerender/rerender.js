import React from 'react'
import ReactDOM from 'react-dom'
import './../index'
import App from './../App'
import reportWebVitals from './../reportWebVitals'
import { addPost } from '../components/Data/Data'

export let rerenderEntireTree = (Data) => {
  ReactDOM.render(
    <React.StrictMode>
      <App Data={Data} addPost={addPost} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

reportWebVitals();