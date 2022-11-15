import React from "react";
import './Bisection.css';
import ChartBI from './ChartBi';
import * as ReactDOM from 'react-dom';
const math = require('mathjs');

var xlbi = [];
var xrbi = [];
var xmbi = [];
var loopbi = [];

export default function Bisection(){
    function BisectionFuction(Xl,Xr,Function){
        const func = (x) =>{
            let expr = math.parse(Function);
            return expr.evaluate({x: (x)});
        }
        var xl = Xl;
        var xr = Xr;
        var Error = 0;
        var xm, xold;
        var i = 0;
        var count = 0;
        do{
            xlbi.push(xl);
            xrbi.push(xr);
            loopbi.push(i++);
            xm = (xl-xr)/2;
            xmbi.push(xm);
            if(func(xm)*func(xr)<0){
                xold = xl;
                xl = xm;
            }
            else if(func(xm)*func(xl)>0){
                xold = xr;
                xr = xm;
            }
            console.log("Xm = "+xm);
            Error = Math.abs((xm-xold)/xm);
            count++;
        }while(Error>0.000001&&count!==100);
        console.log(xm);
        return "Xm = "+xm.toFixed(5);
    }
    function getValue (){
        var Xl = document.getElementById("xl").value;
        var Xr = document.getElementById("xr").value;
        var Function = document.getElementById("Function").value;
        var Xm = BisectionFuction(Xl,Xr,Function);
        const Rechart = ReactDOM.createRoot(document.getElementById("showchart"));
        Rechart.render(
            <div>
            <ChartBI data = {{xm:xmbi, xl:xlbi , xr:xrbi ,loop:loopbi}}/>
            </div>
        );
        console.log(Xl);
        console.log(Xr);
        console.log(Function);
        console.log(Xm);
        document.getElementById("ShowXM").innerHTML = Xm;
    }
    return(
        <div className="TitleBi"><h1 style={{color:'black',paddingLeft:'725px',paddingTop:'75px'}}>Bisection</h1>
            <div className="containerBi" style={{color:'black'}}>
            <form>
                <label>
                    <h4 style={{paddingLeft:'80px'}}>Xl :</h4>
                </label> 
                    <input id = "xl" placeholder="Xl" type='number' style={{ width: "40px" }} size='1' padding='500' width='100'></input>
                <label>    
                    <h4 style={{paddingTop:'20px'}}>Xr :</h4>
                </label>
                    <input id = "xr" placeholder="Xr" type = 'number' style = {{ width: "40px"}} size='1'></input>
                <div className="labelfunc">
                <label>    
                    <h4 style={{paddingLeft:'45px'}}>Function :</h4>
                </label>
                    <input id = "Function" placeholder="Function"size='15'></input>
                </div>
            </form>
            <div className="buttonbi">
                <button onClick={getValue}>Calculate</button>
            </div>
            </div>
            <div id="ShowXM" className="ShowXM" style={{color: 'black',paddingLeft:'750px',paddingTop:'30px'}}></div>
            <div className="chartcontrainer">
            <div id = "showchart" className = 'chart' style={{paddingLeft:'550px' , paddingTop:'30px'}}>
                <ChartBI data = {{xm:xmbi, xl:xlbi , xr:xrbi ,loop:loopbi}}/>
            </div>
            </div>
        </div>
    );
}
   
