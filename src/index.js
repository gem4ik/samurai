import './index.css'
import Store from './components/Data/Data'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

let rerenderEntireTree = (Data) => {
  ReactDOM.render(
    <React.StrictMode>
      <App Data={Store.getData()}
        dispatch={Store.dispatch.bind(Store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
Store.subject(rerenderEntireTree)

rerenderEntireTree(Store.getData())