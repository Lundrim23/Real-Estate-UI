import React from 'react';
import './layout.scss';
import Navbar from './components/navBar/Navbar';
import HomePage from './routes/Homepage/homePage';

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
