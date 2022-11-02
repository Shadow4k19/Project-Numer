import React from "react";
import ChartOne from "./ChartOne";
const math = require('mathjs');

var Xone = [];
var loopone = [];

export default function Newton(){
    function Newtonfunction(X,Function){
        const func = (x) =>{
            let expr = math.parse(Function);
            return expr.evaluate({x: (x)});
        }
        const funcprime = (x) =>{
            const exprfxprime  = math.derivative(math.parse(Function), 'x')
            return exprfxprime.evaluate({x: x});
        }
        var x = parseFloat(X);
        var dx = 0;
        var Error = 0;
        var i = 0;
        do{
            dx = ((-1*func(x))/(funcprime(x)));
            x += dx;
            console.log(dx);
            Xone.push(x);
            Error = Math.abs((dx)/x)*100;
            loopone.push(i++);
        }while(Error>0.0000001);
        return "X = "+x.toFixed(5);
    }
    function getValue (){
        var X = document.getElementById("x").value;
        var Function = document.getElementById("Function").value;
        var Xans = Newtonfunction(X,Function);
        console.log(X);
        console.log(Function);
        document.getElementById("ShowAns").innerHTML = Xans;
    }
    return(
        <div><h1 style={{color:'black',paddingLeft:'640px',paddingTop:'75px'}}>Newton Raphson</h1>
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