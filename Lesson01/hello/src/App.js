import logo from './logo1.jpg';
import './App.css';
import Dvt from './components/Dvt';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
      </header>
      <Dvt/>
    </div>
  );
}

export default App;
