import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Sidebar from './component/Sidebar';
import Bisection from './component/Bisection';
import Falseposition from './component/Falseposition';

function App() {
  return (
    <div className='main'>
        <Sidebar />
      <div className='container'>
      <BrowserRouter>
      <Routes>
        <Route path ='/'element = {<Home />}></Route>
        <Route path ='/Bisection'element = {<Bisection />}></Route>
        <Route path ='/Falseposition'element = {<Falseposition />}></Route>
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
