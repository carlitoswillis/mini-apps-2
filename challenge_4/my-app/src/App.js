/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import { configureStore } from './store';

import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <div className="game">
          {new Array(10).fill(0)
            .map((x, idx) => new Array(10).fill(0)
              .map((y, idy) => (<div onKeyPress={() => { console.log(JSON.parse(`[${idx}, ${idy}]`)); }} onClick={() => { console.log(JSON.parse(`[${idx}, ${idy}]`)); }} name={`[${idx}, ${idy}]`} className="square" />)))}
        </div>
      </div>
    </Provider>
  );
}

export default App;
