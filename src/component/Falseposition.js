import React from "react";
import './Falseposition.css';
import { Parser } from "expr-eval";
import ChartBI from './ChartBi';

var xlbi = [];
var xrbi = [];
var xmbi = [];
var loopbi = [];

export default function Falseposition(){
    function FalsePositionFuction(Xl,Xr,Function){
        const parser = new Parser();
        const func = (x) =>{
            let expr = parser.parse(Function);
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
            xm=((xl*func(xr))-(xr*func(xl)))/(func(xr)-func(xl));
            xmbi.push(xm);
            if(func(xm)*func(xr)<0){
                xold = xl;
                xl = xm;
            }
            else if(func(xm)*func(xl)>0){
                xold = xr;
                xr = xm;
            }
            Error = Math.abs((xm-xold)/xm);
            count++;
        }while(Error>0.000001&&count!== 50 );
        console.log(xm);
        return "Xm = "+xm;
    }
    function getValue (){
        var Xl = document.getElementById("xl").value;
        var Xr = document.getElementById("xr").value;
        var Function = document.getElementById("Function").value;
        var Xm = FalsePositionFuction(Xl,Xr,Function);
        console.log(Xl);
        console.log(Xr);
        console.log(Function);
        console.log(Xm);
        document.getElementById("ShowXM").innerHTML = Xm;
    }
    return(
        <div><h1 style={{color:'black',paddingLeft:'685px',paddingTop:'75px'}}>Falseposition</h1>
            <div className="containerBi" style={{color:'black'}}>
            <form>
                <label>
                    <h4 style={{paddingLeft:'80px'}}>Xl :</h4>
                </label> 
                    <input id = "xl" placeholder="Xl" type='number' style={{ width: "40px" }} size='1' padding='500' width='100'></input>
                <label>    
                    <h4 style={{paddingTop:'20px'}}>Xr :</h4>
                </label>
                    <input input id = "xr" placeholder="Xr" type = 'number' style = {{ width: "40px"}} size='1'></input>
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
            <div id="ShowXM" className="ShowXM" style={{color: 'black'}}></div>
            <div id = "showchart" style={{paddingLeft:'350px' , paddingTop:'30px'}}>
                <ChartBI data = {{xm:xmbi, xl:xlbi , xr:xrbi ,loop:loopbi}}/>
            </div>
        </div>
        
    )
}