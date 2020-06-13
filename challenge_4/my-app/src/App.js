import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <div className="game">
        {new Array(10).fill(0)
          .map( (x, idx) =>
            new Array(10).fill(0)
              .map( (y, idy) =>
                (<div onClick={() => { console.log(JSON.parse(`[${idx}, ${idy}]`))}} name={`[${idx}, ${idy}]`} className="square"></div>)))}
      </div>
    </div>
  );
}

export default App;
