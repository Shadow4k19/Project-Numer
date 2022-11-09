import React from "react";

export default function Lagarange(){
    function getMat(){
        var Matx = [];
        var Maty = [];
        for(var i = 0 ; i < 5 ; i++){
            Matx.push(document.getElementById("Matnum"+i).value);
            Maty.push(document.getElementById("Matnumy"+i).value);
        }
        var X_point = document.getElementById("x_point").value;
        var Y_point = document.getElementById("y_point").value;
        console.log(Y_point);
        var ans = Cal(Matx,Maty,X_point,Y_point);
        document.getElementById("Showans").innerHTML = "Y = "+ans.toFixed(4);
    }
    function Cal(Matx,Maty,x_point,y_point){
        var L;
        var y = 0;
        for(var i = 0 ; i < Matx.length ; i++){
            L = 1 ;
            for(var j = 0 ; j < Maty.length ; j++){
                if(i!==j){
                L = (L * (x_point - Matx[j])) / (Matx[i] - Matx[j]);
                //console.log(L);
                }
            }
            //y += L * Maty[i];
            y += L * Maty[i];
            console.log( L+"*"+Maty[i]+" = " +y);
        }
        //console.log(y_point);
        return y;
    }
    return(
            <div><h1 style={{color:'black',paddingLeft:'715px',paddingTop:'75px'}}>Lagarange</h1>
            <div className="containerBi" style={{color:'black'}}>
            <form>
                <label>
                    <h4>X :</h4>
                </label> 
                    <input id = "Matnum0" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnum1" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnum2" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnum3" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnum4" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                <label>
                    <h4>Y :</h4>
                </label>
                    <input id = "Matnumy0" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnumy1" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnumy2" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnumy3" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnumy4" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                <label>
                    <h4>X_point :</h4>
                </label>
                <input id = "x_point" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                <label>
                    <h4>Y_point :</h4>
                </label>
                <input id = "y_point" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
            </form>
            <div id = 'Matrix' className="matrix" style={{paddingTop:'10px'}}></div>
            <div style={{paddingLeft:'160px'}}>
                <button onClick={getMat}>Calculate</button>
            </div>
            <div id = 'Showans' style={{paddingLeft:'85px',paddingTop:'20px'}}></div>
            </div>
            </div>
        )
    }
    