import React from 'react'
import ReactDOM from 'react-dom'
import './../index'
import App from './../App'
import reportWebVitals from './../reportWebVitals'
import { addPost, updateTextValue } from '../components/Data/Data'

export let rerenderEntireTree = (Data) => {
  ReactDOM.render(
    <React.StrictMode>
      <App Data={Data} addPost={addPost} updateTextValue={updateTextValue} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

reportWebVitals();