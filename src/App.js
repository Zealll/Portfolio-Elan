import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './components/header/Header.js'
import Header from './components/header/Header.js';
import Body from './components/body/Body.js'

function App() {
  return (
    <div className="App">
      {/* <div className='max-width'> */}
        <Header />
        <Body />
      {/* </div> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    </div>
  );
}

export default App;
