import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import TopAlbums from './component/TopAlbums/TopAlbums';
import NewAlbums from './component/NewAlbums/NewAlbums';
import Songs from './component/Songs/Songs';

function App() {
  return (
   <div className="App">
     <StyledEngineProvider injectFirst sx={{backgroundColor:"#121212"}}>
    <Navbar />
    <Hero/>
    <TopAlbums/> 
    < NewAlbums />
    < Songs />
  </StyledEngineProvider>
   </div>
  );
}

export default App;