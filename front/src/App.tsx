import React from 'react';
import logo from './logo.svg';
import { Pet } from './components/Pet';
import './styles/App.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pet />
      </header>
    </div>
  );
}

export default App;
