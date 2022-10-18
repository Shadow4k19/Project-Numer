import React from "react";
import './Bisection.css';
import { Parser } from "expr-eval";

export default function Bisection(){
    function BisectionFuction(Xl,Xr,Function){
        const parser = new Parser();
        const func = (x) =>{
            let expr = parser.parse(Function);
            return expr.evaluate({x: (x)});
        }
        var xl = parseInt(Xl);
        var xr = parseInt(Xr);
        var Error = 0;
        var xm, xold;
        do{
            xm = (xl-xr)/2;
            if(func(xm)*func(xr)<0){
                xold = xl;
                xl = xm;
            }
            else if(func(xm)*func(xl)>0){
                xold = xr;
                xr = xm;
            }
            Error = Math.abs((xm-xold)/xm);
        }while(Error>0.000001);
        console.log(xm);
        return "Xm = "+xm;
    }
    function getValue (){
        var Xl = document.getElementById("xl").value;
        var Xr = document.getElementById("xr").value;
        var Function = document.getElementById("Function").value;
        var Xm = BisectionFuction(Xl,Xr,Function);
        console.log(Xl);
        console.log(Xr);
        console.log(Function);
        console.log(Xm);
    }
    return(
        <div className="TitleBi"><h1 style={{color:'black',paddingLeft:'725px',paddingTop:'75px'}}>Bisection</h1>
            <div className="containerBi" style={{color:'black'}}>
            <form>
                <label>
                    <h4 style={{paddingLeft:'80px'}}>Xl :</h4>
                </label> 
                    <input id = "xl" placeholder="Xl" size='1' padding='500' width='100'></input>
                <label>    
                    <h4 style={{paddingTop:'20px'}}>Xr :</h4>
                </label>
                    <input id = "xr" placeholder="Xr" size='1'></input>
                <div className="labelfunc">
                <label>    
                    <h4 style={{paddingLeft:'45px'}}>Function :</h4>
                </label>
                    <input id = "Function" placeholder="Function"size='15'></input>
                </div>
            </form>
            <div className="buttonbi">
                <button>Calculate</button>
            </div>
            </div>
        </div>
    );
}