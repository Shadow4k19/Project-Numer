import React from "react";
import './Bisection.css';
import * as ReactDOM from 'react-dom';
import ApexChartRegression from "./ChartRegression";
const math = require('mathjs');
var MatXfp = [];
var MatYfp = [];
var chartans = [];
var chartansPoly = [];
var Showmatrix = [];
export default function LinearRegression(){
    function getMat(){
        var Matx = [];
        var Maty = [];
        for(var i = 0 ; i < 9 ; i++){
            Matx.push(document.getElementById("Matnum"+i).value);
            MatXfp.push(document.getElementById("Matnum"+i).value);
            MatYfp.push(document.getElementById("Matnumy"+i).value);
            Maty.push(document.getElementById("Matnumy"+i).value);
        }
        console.log("X ="+Matx);
        console.log("Y ="+Maty);
        
        //console.log(Matx+Maty);
        var ans = Cal(Matx,Maty);
        var ansPoly = Cal1(Matx,Maty);
        console.log("Poly = "+ansPoly);
        var str = "Linear <br>";
        var strMatrix = "";
        var str2 = "Polynomial <br>"
        var strMatrixtest = "";
        for(i = 0 ; i < ans.length ; i++){
            str+="X["+i+"] = " + ans[i]+"<br>";
            strMatrix+="[ ";
            for(var j = 0 ; j < Showmatrix.length ; j++){
            strMatrixtest += "<input size ='1' placeholder= '"+ Showmatrix[i][j]+"'></input>"
            strMatrix +=Showmatrix[i][j]+" "
            console.log(Showmatrix[i][j]);
            }
            strMatrixtest +="<br>"
            strMatrix+="]<br>";
        }
        for(i = 0 ; i<ansPoly.length ; i++){
            str2+="X["+i+"] = " +ansPoly[i]+"<br>";
        }
        var chartans1 = Proof(Matx,ans)
        console.log(chartans1);
        var chartanspoly = Proof2(Matx,ansPoly);
        console.log(chartanspoly);
        const Rechart = ReactDOM.createRoot(document.getElementById("Showchart"));
        Rechart.render(
            <div>
            <ApexChartRegression data = {{y:MatYfp, ansfp:chartans,ansPoly:chartansPoly,x:MatXfp}} />
            </div>
        );
        MatXfp= [];
        MatYfp = [];
        chartans = [];
        chartansPoly = [];
        document.getElementById("Showans").innerHTML = str+str2;
        document.getElementById("Showproof").innerHTML = strMatrix+strMatrixtest;
        Showmatrix = [];
        console.log("X"+MatXfp)
        console.log("chart"+chartans)
    }
    function Proof(X,ans){
        var Y = [];
        var m = Math.pow(ans[0],1);
        var c = Math.pow(ans[1],1);
        for(var i = 0 ; i < X.length ; i++){
            Y[i] = c*Math.pow(X[i],1)+m;
            Y[i] = Y[i].toFixed(2);
            chartans.push(Y[i]);
        }
        return Y;
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
    function Cal1(X,Y){
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
    function Cal(X,Y){
        /*var X = [10,15,20,30,40,50,60,70,80];
var Y = [5,9,15,18,22,30,35,38,43];*/
var A = [[0,0],[0,0]];
var B = [];
var n = X.length;
// n1 = A.length;
//var ypoint = new Array(n1);
var count = 0;

function sumX(x,pow){
    var sum = 0 ;
    for(var i = 0 ; i<x.length ; i++){
        sum += Math.pow(x[i],pow);
    }
    return sum;
}

function sum(y){
    var sum = 0;
    for(var i = 0 ; i < y.length ; i++){
        sum += y[i];
    }
    return sum;
}

function sumXY(y,x){
    var sum = 0;
    for(var i = 0 ; i < x.length ; i++)
    {
        sum+= x[i]*y[i];
    }
    return sum;
}

for(var i = 0 ; i < 2 ; i++){
    if(i!==2){
        count = 1;
    }
    A[0][0] = n;
    console.log(A[0][0])
    for(var j = 0 ; j< 2; j++){
        if(i!==j){
            A[i][j] = sumX(X,count);
            //console.log(sumX(X,count))
            count++;
        }
        if(i===1&&j===1){
            A[1][1] = sumX(X,count);
        }
    }
    count = 0;
}
for(i = 2; i <=2 ; i++){
    console.log(X)
    console.log(Y);
    B[0] = sumX(Y,1);
    console.log(sumX(X,1));
    console.log(sum(Y)+1)
    B[1] = sumXY(Y,X)
}
console.log("A = "+A);
console.log("B = "+B);
var Acopy = pushArray(A);
Showmatrix = pushArray(A);
        var x = [];
        var deta = math.det(A)
        console.log(deta)
        function pushArray(a){
            var A = [];
            for(var i = 0 ; i < 2 ; i++){
                A.push([]);
                for(var j = 0 ; j < 2 ; j++){
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
        for(i = 0 ; i < 2  ;i++){
            x[i] = x[i].toFixed(3);
        }
    return x;
    }
    return(
            <div><h1 style={{color:'black',paddingLeft:'715px',paddingTop:'75px'}}>Linear Regression</h1>
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
            <div id = 'Showans' style={{paddingLeft:'215px',paddingTop:'50px'}}></div>
            <div id = 'Showproof' style={{paddingLeft:'215px',paddingTop:'50px'}}></div>
            <div id = 'Showchart' style={{paddingLeft:'50px',paddingTop:'20px'}}>
                <ApexChartRegression data = {{y:MatYfp, ansfp:chartans,x:MatXfp,ansPoly:chartansPoly}} />
            </div>
            </div>
            </div>
        )
    }
    