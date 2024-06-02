import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';

function App() {
  return (
    <StyledEngineProvider injectFirst>
    <Navbar />
    <Hero/>
  </StyledEngineProvider>
  );
}

export default App;