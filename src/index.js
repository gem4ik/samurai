import './index.css'
import Data from './components/Data/Data'
import { addPost, updateTextValue, subject } from './components/Data/Data'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

let rerenderEntireTree = (Data) => {
    ReactDOM.render(
      <React.StrictMode>
        <App Data={Data} addPost={addPost} updateTextValue={updateTextValue} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  
subject(rerenderEntireTree)

rerenderEntireTree(Data)