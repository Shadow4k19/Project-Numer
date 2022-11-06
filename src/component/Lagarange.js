import React from "react";

export default function Lagarange(){
    
    return(
            <div><h1 style={{color:'black',paddingLeft:'655px',paddingTop:'75px'}}>Lagarange</h1>
            <div className="containerBi" style={{color:'black'}}>
            <form>
                <label>
                    <h4 style={{paddingLeft:'50px'}}>X_point :</h4>
                </label> 
                    <input id = "Matnum" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
            </form>
            <div id = 'Matrix' className="matrix" style={{paddingTop:'10px'}}></div>
            <div style={{paddingLeft:'160px',paddingTop:'20px'}}>
                <button onClick={getmat2}>Calculate</button>
            </div>
            <div id = 'Showans' style={{paddingLeft:'85px',paddingTop:'20px'}}></div>
            <div>
            <div id = 'ShowProof'style={{color:'black',paddingRight:'100px'}}></div>
            </div>
            </div>
            </div>
        )
    }
    