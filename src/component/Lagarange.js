import React from "react";
import './Bisection.css';

export default function Lagarange(){
    var LFP = [];
    var ansproof = 0;
    function getMat(){
        var Matx = [];
        var Maty = [];
        for(var i = 0 ; i < 5 ; i++){
            Matx.push(document.getElementById("Matnum"+i).value);
            Maty.push(document.getElementById("Matnumy"+i).value);
        }
        var X_point = document.getElementById("x_point").value;
        console.log("X ="+X_point);
        var ans = Cal(Matx,Maty,X_point);
        var ansfp = Proof(Maty,LFP);
        var str = ""; 
        for(i = 0 ; i < ansfp.length ; i++){
            str += Maty[i] +" x " + LFP[i].toFixed(4) + " = " + ansfp[i]+"<br>";
        }
        str += "Result = " + ansproof.toFixed(4);
        console.log(ansfp);
        console.log(ans);
        document.getElementById("Showans").innerHTML = "ans = "+ans.toFixed(4);
        document.getElementById("Showproof").innerHTML  = str;
        LFP = [];
    }
    function Proof(y,fp){
        var ansfp = [];
        ansproof = 0;
        console.log(y);
        for(var i = 0 ;i < y.length ; i++){
            ansfp[i] = y[i]*fp[i];
            ansproof += ansfp[i]; 
            ansfp[i] = ansfp[i].toFixed(4);
            console.log(ansfp[i]);
        }
        return ansfp;
    }
    function Cal(Matx,Maty,x_point){
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
            LFP.push(L);
            //y += L * Maty[i];
            y += L * Maty[i];
            //console.log( L+"*"+Maty[i]+" = " +y);
        }
        return y;
    }
    return(
            <div><h1 style={{color:'black',paddingLeft:'715px',paddingTop:'75px'}}>Lagarange</h1>
            <div className="containerBi" style={{color:'black'}}>
            <form>
                <label style={{paddingLeft:'90px'}}>
                    <h4>X :</h4>
                </label> 
                    <input id = "Matnum0" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnum1" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnum2" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnum3" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnum4" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                <div>
                <label style={{paddingLeft:'90px'}}>
                    <h4>Y :</h4>
                </label>
                    <input id = "Matnumy0" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnumy1" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnumy2" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnumy3" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnumy4" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                </div>
                <label style={{paddingLeft:'135px'}}>
                    <h4>X_point :</h4>
                </label>
                <input id = "x_point" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
            </form>
            <div id = 'Matrix' className="matrix" style={{paddingTop:'10px'}}></div>
            <div style={{paddingLeft:'160px'}}>
                <button onClick={getMat}>Calculate</button>
            </div>
            <div id = 'Showans' style={{paddingLeft:'145px',paddingTop:'50px'}}></div>
            <div id = 'Showproof' style={{paddingLeft:'120px',paddingTop:'50px'}}></div>
            </div>
            </div>
        )
    }
    