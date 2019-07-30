import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { eventNames } from 'cluster';
//import { isNoop } from '@babel/types';
import axios from 'axios'

class App extends Component {

  state = {
    selectedFile: null
  }
  fileSelectedHandle = event => {
    selectedFile: event.target.files[0]
  }

  fileUploadHandler = () => {
    const fd = new FormData();
    axios.post('');
  }
  render() {
    return (
      <div className="App">
          <input type='file' onChange={this.fileSelectedHandle}></input>
          <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}
export default App;
