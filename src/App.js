import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Sidebar from './component/Sidebar';
import Bisection from './component/Bisection';
import Falseposition from './component/Falseposition';
import Onepoint from './component/Onepoint';
import QandA from './component/Q&A';
import Newton from './component/Newton'

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
        <Route path='/OnePointiteration'element = {<Onepoint />}></Route>
        <Route path='/NewtonRaphson' element = {<Newton />}></Route>
        <Route path='/Q&A'element = {<QandA />}></Route>
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
