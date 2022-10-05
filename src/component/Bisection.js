import React from "react";
import './Bisection.css';
import {useState} from 'react';

export default function Bisection(){
    return(
        <div className="TitleBi"><h1 style={{color:'black',paddingLeft:'725px',paddingTop:'75px'}}>Bisection</h1>
            <div className="containerBi" style={{color:'black'}}>
            <form>
                <label>
                    <h3 style={{paddingLeft:'70px'}}>Xl</h3> 
                    <input width={'50px'} type='number'></input>
                    <h3 style={{paddingLeft:'70px',paddingTop:'20px'}}>Xr</h3>
                    <input type='number'></input>
                    <h3 style={{paddingLeft:'30px',paddingTop:'20px'}}>Funtion</h3>
                    <input type='text'></input>
                </label>
            </form>
            <div className="buttonbi">
                <button>Calculate</button>
            </div>
            </div>
        </div>
    )
}