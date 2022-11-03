import React from "react";
import './Matrix.css'
//const math = require('mathjs');

export default function Jacobi(){
    function Getmat(){
        var Size = document.getElementById("Matnum").value;
        var MatString = "";
        for(var i =  0; i<Size ; i++){
            for(var j = 0 ; j<Size ; j++){
                MatString +=" <input id = 'Matrix"+i+j+"' className = 'inputmat' type='number' style='width: 40px'></input>"
            }
            MatString +=" | <input id = 'Matrixans"+i+j+"' className = 'inputmatans' type='number' style='width: 40px'></input><br>";
        }
        document.getElementById("Matrix").innerHTML = MatString;
    }
    function getmat2(){
        var Size = document.getElementById("Matnum").value;
        var MatA = [];
        var MatB = [];
        for(var i = 0 ; i<Size ; i++){
            MatA.push([]);
            for(var j = 0 ; j<Size ; j++){
                MatA[i].push(document.getElementById("Matrix"+i+j).value);
            }
            MatB.push(document.getElementById("Matrixans"+i+j).value);
        }
        var ans = Cal(MatA,MatB,Size);
        console.log(ans);
        document.getElementById("Showans").innerHTML = ans+"\n";
    }

    function Cal(a,b,size){
        var xnew = [];
        var xold = [];
        var count = 0;
        var n = 0;
        pushArray(xnew);
        pushArray(xold);
        function pushArray(a){
            for(var i = 0 ; i < size ; i++){
                a.push(0);
            }
            return a;
        }
        do
        {
            count = 0;
            n++;
            for(var i = 0 ; i < a.length ; i++)
            {
                xnew[i] = b[i];
                for(var j = 0 ; j < a.length ; j++)
                {
                    if(i !== j)
                    {
                        xnew[i] -= (a[i][j]*xold[j]);
                    }
                }
                xnew[i]/=a[i][i]
                console.log(xnew);
                if(Math.abs((xnew[i]-xold[i])/xnew[i])<=0.0001)
                {
                    count++;
                }
            }
            for(var k = 0 ; k < a.length ; k++)
            {
                xold[k] = xnew[k];
            }
          
        }
        while(count !== xnew.length||n!==100);
        for(i = 0 ; i < size  ;i++){
            xnew[i] = xnew[i].toFixed(3);
        }
        return xnew;
    }
    return(
        <div><h1 style={{color:'black',paddingLeft:'655px',paddingTop:'75px'}}>Jacobi_Iteration</h1>
        <div className="containerBi" style={{color:'black'}}>
        <form>
            <label>
                <h4 style={{paddingLeft:'50px'}}>Number of Matrix :</h4>
            </label> 
                <input id = "Matnum" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
        </form>
        <div style={{paddingLeft:'170px'}}>
            <button onClick={Getmat}>Submit</button>
        </div>
        <div id = 'Matrix' className="matrix" style={{paddingTop:'10px'}}></div>
        <div style={{paddingLeft:'160px',paddingTop:'20px'}}>
            <button onClick={getmat2}>Calculate</button>
        </div>
        <div id = 'Showans' style={{paddingLeft:'85px',paddingTop:'20px'}}></div>
        </div>
        </div>
    )
}