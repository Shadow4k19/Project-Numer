import React from "react";
import './Bisection.css';
import {useState} from 'react';

export default function Bisection(){
    return(
        <div className="TitleBi"><h1 style={{color:'black',paddingLeft:'725px',paddingTop:'75px'}}>Bisection</h1>
            <div className="containerBi" style={{color:'black'}}>
            <form>
                <label>
                    <h4 style={{paddingLeft:'80px'}}>Xl :</h4>
                </label> 
                    <input size='1' padding='500' width='100'></input>
                <label>    
                    <h4 style={{paddingTop:'20px'}}>Xr :</h4>
                </label>
                    <input size='1'></input>
                <div className="labelfun">
                <label>    
                    <h4 style={{paddingLeft:'0px'}}>Function :</h4>
                </label>
                    <input size='30'></input>
                </div>
            </form>
            <div className="buttonbi">
                <button>Calculate</button>
            </div>
            </div>
        </div>
    )
}