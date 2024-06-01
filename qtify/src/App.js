import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/Homepage/Homepage';

function App() {
  return (
    <Router>
    <div className="App">
          <div className="App-header">
            <Routes>
              <Route path="/" element={< HomePage />} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;