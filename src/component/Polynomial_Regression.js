import React from "react";
import './Bisection.css';
import * as ReactDOM from 'react-dom';
import ApexChartRegression from "./ChartRegression";
const math = require('mathjs');

export default function PolynomialRegression(){
    var MatXfp = [];
    var MatYfp = [];
    var chartansPoly = [];
    var chartans = [];
    function getMat(){
        var Matx = [];
        var Maty = [];
        for(var i = 0 ; i < 9 ; i++){
            Matx.push(document.getElementById("Matnum"+i).value);
            MatXfp.push(document.getElementById("Matnum"+i).value);
            MatYfp.push(document.getElementById("Matnumy"+i).value);
            Maty.push(document.getElementById("Matnumy"+i).value);
        }
        console.log(Matx+Maty);
        var ans = Cal(Matx,Maty);
        var chartanspoly = Proof2(Matx,ans);
        console.log(chartanspoly);
        console.log(chartansPoly);
        document.getElementById("Showans").innerHTML = "ans = "+ans;
        const Rechart = ReactDOM.createRoot(document.getElementById("Showchart"));
        Rechart.render(
            <div>
            <ApexChartRegression data = {{y:MatYfp, ansfp:chartans,ansPoly:chartansPoly,x:MatXfp}} />
            </div>
        );
        MatXfp = [];
        MatYfp = [];
        chartansPoly = [];
        chartans = [];
    }
    function Proof2(x,anspoly){
        var Y = [];
        const a0 = Math.pow(anspoly[0],1);
        const a1 = Math.pow(anspoly[1],1);
        const a2 = Math.pow(anspoly[2],1);
        for(var i = 0 ; i < x.length ; i++){
            Y[i] = a0 + a1*Math.pow(x[i],1)+ a2*Math.pow(x[i],2);
            chartansPoly.push(Y[i]);
        }
        return Y;
    }
    function Cal(X,Y){
        var A = [[0,0,0],[0,0,0],[0,0,0]];
        var B = [];
        var n = X.length;
        var count = 0;
        function sumx(x,pow){
            let sum  = 0;
            for(let i = 0 ; i< x.length ; i++){
                sum += Math.pow(x[i],pow);
            }
            return sum;
        }
        function sumxy(y,x){
            let sum  = 0;
            for(let i = 0 ; i< x.length ; i++){
                sum += x[i]*y[i];
            }
            return sum;
        }
        function sumxxy(y,x,pow){
            let sum  = 0;
            for(let i = 0 ; i< x.length ; i++){
                sum += Math.pow(x[i],pow)*y[i];
            }
            return sum;
        }
        for(var i = 0 ; i < 3; i++ ){
            if(i!==2){
                count = 1;
            }
            else{
                count = 2;
            }
            A[0][0] = n;
            for(var j = 0 ; j<3 ; j++){
                if(i!==j){
                    A[i][j] = sumx(X,count);
                    console.log(A);
                    count++;
                }
                if(i===1&&j===1){
                    A[i][i] = sumx(X,count);
                    count++;
                }
                if(i===2&&j===2){
                    A[i][i] = sumx(X,count);
                }
            }
            count = 0;
        }
        //console.log(A);
        
        B[0] = sumx(Y,1);
        B[1] = sumxy(Y,X);
        B[2]= sumxxy(Y,X,2);
    
        var Acopy = pushArray(A);
            console.log("A copy= " + Acopy);
            console.log("B = "+ B);
            var x = [];
            var deta = math.det(A)
            function pushArray(a){
                var A = [];
                for(var i = 0 ; i < 3 ; i++){
                    A.push([]);
                    for(var j = 0 ; j < 3 ; j++){
                        A[i].push(a[i][j]);
                    }
                }
                return A;
            }
            function setArray(A,i)
                {
                    for(var j = 0 ; j < A.length ; j++)
                    A[j][i] = B[j]
                    console.log(A);
                    return A
                }
            for(i = 0 ; i < A.length ; i++)
            {
                console.log("set = "+setArray(A,i));
                x[i] = math.det(setArray(A,i))/deta
                console.log("deta = "+deta);
                //a = [];
                A = pushArray(Acopy);
                //console.log(a);
                console.log("x = "+x);
            }
            console.log(x);
            for(i = 0 ; i < x.length ; i++)
            {
                x[i] = x[i].toFixed(3);
            }
        return x;
        }
    return(
            <div><h1 style={{color:'black',paddingLeft:'645px',paddingTop:'75px'}}>Polynomial_Regression</h1>
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
                    <input id = "Matnum5" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnum6" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnum7" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnum8" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                <div>
                <label style={{paddingLeft:'90px'}}>
                    <h4>Y :</h4>
                </label>
                    <input id = "Matnumy0" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnumy1" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnumy2" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnumy3" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnumy4" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnumy5" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnumy6" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnumy7" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                    <input id = "Matnumy8" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
                </div>
            </form>
            <div id = 'Matrix' className="matrix" style={{paddingTop:'10px'}}></div>
            <div style={{paddingLeft:'230px'}}>
                <button onClick={getMat}>Calculate</button>
            </div>
            <div id = 'Showans' style={{paddingLeft:'135px',paddingTop:'50px'}}></div>
            <div id = 'Showchart' style={{paddingLeft:'50px',paddingTop:'20px'}}>
                <ApexChartRegression data = {{y:MatYfp, ansfp:chartans,x:MatXfp,ansPoly:chartansPoly}} />
            </div>
            </div>
            </div>
        )
    }
    