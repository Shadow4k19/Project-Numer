import React, { useState } from "react";
import ChartOne from "./ChartOne";
import * as ReactDOM from 'react-dom';
const math = require('mathjs');

var Xone = [];
var loopone = [];

export default function Onepoint(){
    var value;
    var [getX,setX] = useState('');
    var [getFunc,setFunc] = useState('');
    function exam(){
        var exampleBI = document.getElementById("exampleBI");
        value = exampleBI.value;
        if(value !== 0){
            fetch('http://localhost:3001/Onepoint')
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                setX(data[value].X);
                setFunc(data[value].Function); 
            })
        }
    }
    function Onepoint(X,Function){
        const func = (x) =>{
            let expr = math.parse(Function);
            return expr.evaluate({x: (x)});
        }
        var xold = X;
        var xnew = 0;
        var Error = 0;
        var i = 0;
        do{
            xnew = func(xold);
            Xone.push(xnew);
            Error = Math.abs((xnew-xold)/xnew)*100;
            i++;
            loopone.push(i);
            xold = xnew;
        }while(Error>0.0000001&&i!==50);
        console.log(xnew);
        return "X = "+xnew.toFixed(5);
    }
    function getValue (){
        var X = document.getElementById("x").value;
        var Function = document.getElementById("Function").value;
        var Xans = Onepoint(X,Function);
        const Rechart = ReactDOM.createRoot(document.getElementById("showchart"));
        Rechart.render(
            <div>
             <ChartOne data = {{x:Xone,loop:loopone}}/>
            </div>
        );
        console.log(X);
        console.log(Function);
        document.getElementById("ShowAns").innerHTML = Xans;
        Xone = [];
        loopone = [];
    }
    return(
        <div><h1 style={{color:'black',paddingLeft:'720px',paddingTop:'75px'}}>One point</h1>
            <div className="containerBi" style={{color:'black'}}>
            <form>
                <label>
                    <h4 style={{paddingLeft:'135px', paddingTop:'25px'}}>X :</h4>
                </label> 
                    <input id = "x" placeholder="X" type='number' value={getX}style={{ width: "40px" }} size='1' padding='500' width='100'></input>
                <div className="labelfun">
                <label>    
                    <h4 style={{paddingLeft:'45px'}}>Function :</h4>
                </label>
                    <input input id = "Function" placeholder="Function" value={getFunc} size='15'></input>
                </div>
            </form>
            <div className="buttonbi">
                <button onClick={getValue}>Calculate</button>
            </div>
            <div style={{paddingLeft:'100px',paddingTop:'20px'}}>
            <select id="exampleBI" style={{paddingLeft:'50px',paddingRight:'50px'}} onChange = {exam}>
                <option value="0">----Example 1----</option>
                <option value="1">----Example 2----</option>
                <option value="2">----Example 3----</option>
                <option value="3">----Example 4----</option>
                </select>
            </div>
            </div>
            <div id="ShowAns" className="ShowXM" style={{color: 'black',paddingLeft:'750px',paddingTop:'30px'}}></div>
            <div id = "showchart" style={{paddingLeft:'550px' , paddingTop:'30px'}}>
                <ChartOne data = {{x:Xone,loop:loopone}}/>
            </div>
        </div>
    )
}