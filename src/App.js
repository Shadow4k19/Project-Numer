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
//import Secant from './component/Secant';
import ChamerRule from './component/Chamer_Rule';
import Guass_Elimination from './component/Guass_Eliminate';
import Jacobi from './component/Jacobi';
import Gauss_seidel from './component/Guass_sidel';
import Conjugate_gradient from './component/Conjugate_gradient';
import Default from './component/Default';

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
        <Route path='/cramerrule' element = {<ChamerRule />}></Route>
        <Route path='/Taylorseries' element = {<Default />}></Route>
        <Route path='/Secant' element = {<Default />}></Route>
        <Route path='/gausselimination' element = {<Guass_Elimination />}></Route>
        <Route path='/guassjordan' element = {<Default />}></Route>
        <Route path='/ludecompositon' element = {<Default />}></Route>
        <Route path='/choleskey' element = {<Default />}></Route>
        <Route path='/jacobi' element = {<Jacobi />}></Route>
        <Route path='/gaussseidel' element = {<Gauss_seidel />}></Route>
        <Route path='/conjugategradient' element = {<Conjugate_gradient />}></Route>
        <Route path='/Q&A'element = {<QandA />}></Route>
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
