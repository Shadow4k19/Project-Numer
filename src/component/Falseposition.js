import React from "react";
import './Falseposition.css';

export default function Falseposition(){
    return(
        <div><h1 style={{color:'black',paddingLeft:'685px',paddingTop:'75px'}}>Falseposition</h1>
            <div className="containerBi" style={{color:'black'}}>
            <form>
                <label>
                    <h4 style={{paddingLeft:'80px'}}>Xl :</h4>
                </label> 
                    <input size='1' padding='10px' width='100'></input>
                <label>    
                    <h4 style={{paddingTop:'20px'}}>Xr :</h4>
                </label>
                    <input size='1'></input>
                <div className="labelfun">
                <label>    
                    <h4 style={{paddingLeft:'45px'}}>Function :</h4>
                </label>
                    <input size='15'></input>
                </div>
            </form>
            <div className="buttonbi">
                <button>Calculate</button>
            </div>
            </div>
        </div>
    )
}