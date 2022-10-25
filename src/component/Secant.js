import React from "react";
import { Parser } from "expr-eval";
const math = require('mathjs');

export default function Secant(){
    function BisectionFuction(X0,X1,Function){
        const parser = new Parser();
        const func = (x) =>{
            let expr = parser.parse(Function);
            return expr.evaluate({x: (x)});
        }
        var x0 = X0;
        var x1 = X1;
        var Error = 0;
        var dx;
        var i = 0;
        var count = 0;
        do{
            xlbi.push(x0);
            xrbi.push(x1);
            loopbi.push(i++);
            dx = ((-1*func(x1))*(x0-x1))/(func(x0)-(func(x1)));
            x0 = x1;
            x1 = x1+dx;
            Error = Math.abs((x1-x0)/x1)*100;
            count++;
        }while(Error>0.000001&&count!==100);
        console.log(x1);
        return "X = "+x1.toFixed(5);
    }
    function getValue (){
        var X0 = document.getElementById("x0").value;
        var X1 = document.getElementById("x1").value;
        var Function = document.getElementById("Function").value;
        var ans = BisectionFuction(X0,X1,Function);
        console.log(X0);
        console.log(X1);
        console.log(Function);
        console.log(ans);
        document.getElementById("ShowXM").innerHTML = ans;
    }
    return(
        <div className="TitleBi"><h1 style={{color:'black',paddingLeft:'725px',paddingTop:'75px'}}>Secant</h1>
            <div className="containerBi" style={{color:'black'}}>
            <form>
                <label>
                    <h4 style={{paddingLeft:'80px'}}>X0 :</h4>
                </label> 
                    <input id = "x0" placeholder="Xl" type='number' style={{ width: "40px" }} size='1' padding='500' width='100'></input>
                <label>    
                    <h4 style={{paddingTop:'20px'}}>X1 :</h4>
                </label>
                    <input id = "x1" placeholder="Xr" type = 'number' style = {{ width: "40px"}} size='1'></input>
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
                //<ChartBI data = {{xm:xmbi, xl:xlbi , xr:xrbi ,loop:loopbi}}/>
            </div>
            </div>
        </div>
    );
}
   