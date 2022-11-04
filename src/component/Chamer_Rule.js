import React from "react";
import './Matrix.css'
const math = require('mathjs');

export default function ChamerRule(){
    function Getmat(){
        var Size = document.getElementById("Matnum").value;
        var MatString = "";
        for(var i =  0; i<Size ; i++){
            for(var j = 0 ; j<Size ; j++){
                MatString +=" <input id = 'Matrix"+i+j+"' className = 'inputmat' placeholder=' ' type='number' style = 'width: 40px'></input>"
            }
            MatString +=" | <input id = 'Matrixans"+i+j+"' className = 'inputmatans' placeholder=' ' type='number' style = 'width: 40px'></input><br>";
        }
        document.getElementById("Matrix").innerHTML = MatString;
    }
    function getmat2(){
        var Size = document.getElementById("Matnum").value;
        var MatA = [];
        var MatB = [];
        var MatBfp = []
        for(var i = 0 ; i<Size ; i++){
            MatA.push([]);
            MatBfp.push([]);
            for(var j = 0 ; j<Size ; j++){
                MatA[i].push(document.getElementById("Matrix"+i+j).value);
                //console.log(MatA);
            }
            MatB.push(document.getElementById("Matrixans"+i+j).value);
            MatBfp[i].push(document.getElementById("Matrixans"+i+j).value);
            //console.log(MatB);
        }
        var matA = pushArray(MatA,Size);
        //console.log(MatA+" "+MatB);
        var ans = Cal(MatA,MatB,Size);
        var Proofans = Proof(matA,MatBfp);
        console.log(ans);
        var str = "";
        var str1 = "";
        var str2 = "";
        var str3 = "";
        console.log(matA);
        for(i = 0 ; i < Size ; i++){
            str += "X["+i+"] = "+ans[i]+"<br>";
            str1 += matA[i]+"<br>";
            str2 += ans[i]+"<br>";
            str3 += Proofans[i]+"<br>";
        }
        //console.log("A = "+MatA);
        document.getElementById("Showans").innerHTML = str;
        document.getElementById("ShowProof").innerHTML = str1+"x"+str2+"="+str3;
    }
    function pushArray(a,size){
        var A = [];
        for(var i = 0 ; i < size ; i++){
            A.push([]);
            for(var j = 0 ; j < size ; j++){
                A[i].push(a[i][j]);
                console.log(A);
            }
        }
        return A;
    }
    function Proof(a,b){
        var mat = [];
        for(var i = 0 ; i < b.length ; i++){
            mat.push([]);
            for(var j = 0 ; j < b[0].length ; j++){
                for(var k = 0 ; k < b.length ; k++){
                    mat[i][j] += a[i][k] * b[k][j];
                    console.log(mat);
                }
            }
        }
        return mat;
    }
    function Cal(a,b,size){
        var A = pushArray(a);
        var x = [];
        var deta = math.det(A)
        function pushArray(a){
            var A = [];
            for(var i = 0 ; i < size ; i++){
                A.push([]);
                for(var j = 0 ; j < size ; j++){
                    A[i].push(a[i][j]);
                }
            }
            return A;
        }
        function setArray(A,i)
            {
                for(var j = 0 ; j < A.length ; j++)
                A[j][i] = b[j]
                //console.log(A);
                return A
            }
        for(var i = 0 ; i < a.length ; i++)
        {
            //console.log("set = "+setArray(a,i));
            x[i] = math.det(setArray(a,i))/deta
            //console.log("deta = "+deta);
            //a = [];
            a = pushArray(A);
            //console.log(a);
            //console.log("x = "+x);
        }
        for(i = 0 ; i < size  ;i++){
            x[i] = x[i].toFixed(3);
        }
        return x;
    }
    return(
        <div><h1 style={{color:'black',paddingLeft:'685px',paddingTop:'75px'}}>Chamer_Rule</h1>
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
        <div style={{paddingLeft:'100px',paddingTop:'20px'}}>
        <div id = 'Showans'></div>
        </div>
        <div>
        <div id = 'ShowProof'style={{paddingRight:'100px'}}></div>
        </div>
        </div>
        </div>
    )
}