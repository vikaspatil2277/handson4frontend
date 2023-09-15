import React from 'react';
import { Route, Routes, } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './header/Header';
import Welcome from './components/Welcome';




function App() {
  return (
    <div className="App">
      
    
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;