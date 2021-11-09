import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';

import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MyTeam from './pages/MyTeam';
import Customized from './pages/Customized';
import Investigator from './pages/Investigator';
import MCProvider from './pages/MCProvider';
import Page from './pages/Page';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/My_Team' element={<MyTeam/>} />
          <Route path='/Tournament' element={<Page/>} />
          <Route path='/Investigator' element={<Investigator/>} />
          <Route path='/MC_Provider' element={<MCProvider/>} />
          <Route path='/Stadium' element={<Page/>} />
          <Route path='/Customized_players' element={<Customized/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;