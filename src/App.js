import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './component/Sidebar';
import Bisection from './component/Bisection';

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path='/Bisection'element = {<Bisection />}>
        </Route>
      </Routes>
      </Sidebar>
      </BrowserRouter>
      <div className='sidebar'>
      </div>
      <div className='container'>
      </div>
    </div>
  );
}

export default App;
