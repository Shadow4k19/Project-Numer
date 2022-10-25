import React from "react";
import { Parser } from "expr-eval";
import ChartOne from "./ChartOne";

var Xone = [];
var loopone = [];

export default function Onepoint(){
    function Onepoint(X,Function){
        const parser = new Parser();
        const func = (x) =>{
            let expr = parser.parse(Function);
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
        console.log(X);
        console.log(Function);
        document.getElementById("ShowAns").innerHTML = Xans;
    }
    return(
        <div><h1 style={{color:'black',paddingLeft:'720px',paddingTop:'75px'}}>One point</h1>
            <div className="containerBi" style={{color:'black'}}>
            <form>
                <label>
                    <h4 style={{paddingLeft:'135px', paddingTop:'25px'}}>X :</h4>
                </label> 
                    <input id = "x" placeholder="X" type='number' style={{ width: "40px" }} size='1' padding='500' width='100'></input>
                <div className="labelfun">
                <label>    
                    <h4 style={{paddingLeft:'45px'}}>Function :</h4>
                </label>
                    <input input id = "Function" placeholder="Function"size='15'></input>
                </div>
            </form>
            <div className="buttonbi">
                <button onClick={getValue}>Calculate</button>
            </div>
            </div>
            <div id="ShowAns" className="ShowXM" style={{color: 'black',paddingLeft:'750px',paddingTop:'30px'}}></div>
            <div id = "showchart" style={{paddingLeft:'550px' , paddingTop:'30px'}}>
                <ChartOne data = {{x:Xone,loop:loopone}}/>
            </div>
        </div>
    )
}