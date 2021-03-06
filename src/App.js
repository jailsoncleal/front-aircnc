import React from 'react';
import './App.css';
import logo from './assets/logo.png';

import Routes from './routes';

function App() {

  return (
      <div className="container">
        <img src={logo} alt="Seubet" width="80px"/>
        <div className="content">
          <Routes />
        </div>
      </div>
  );
}

export default App;
