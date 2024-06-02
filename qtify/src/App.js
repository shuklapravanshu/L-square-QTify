import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
          <div className="App-header">
            <Routes>
              <Route path="/" element={< Navbar />} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;