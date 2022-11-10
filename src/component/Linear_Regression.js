import React from "react";
import './Bisection.css';

export default function LinearRegression(){
    function getMat(){
        var Matx = [];
        var Maty = [];
        for(var i = 0 ; i < 9 ; i++){
            Matx.push(document.getElementById("Matnum"+i).value);
            Maty.push(document.getElementById("Matnumy"+i).value);
        }
        //console.log(Matx+Maty);
        var ans = Cal(Matx,Maty);
        document.getElementById("Showans").innerHTML = "Y = "+ans +" PLS NOT F";
    }
    function Cal(X,Y){
    var A = [[0,0],[0,0]];
    //var B = [[0],[0]];
    var n = X.length;
    var n1 = A.length;
    var x;
    var i,j,l;
    var y = new Array(n1)
    var count = 0;
    function sumx(x,pow){
        let sum  = 0;
        for( i = 0 ; i< x.length ; i++){
            sum += Math.pow(x[i],pow);
        }
        return sum;
    }
    function sumy(y){
        let sum  = 0;
        for( i = 0 ; i< y.length ; i++){
            sum += y[i];
        }
        return sum;
    }
    function sumxy(y,x){
        let sum  = 0;
        for( i = 0 ; i< x.length ; i++){
            sum += x[i]*y[i];
        }
        return sum;
    }
    for(i = 0 ; i < 2 ; i++ ){
        if(i!==2){
            count = 1;
        }
        A[0][0] = n;
        for(let j = 0 ; j<2 ; j++){
            if(i!==j){
                A[i][j] = sumx(X,count);
                //console.log(A);
                count++;
            }
            if(i===1&&j===1){
                A[i][i] = sumx(X,count);
            }
        }
        count = 0;
    }
    //console.log(A);

    for( i = 2 ; i <=2 ; i++){
        A[0][2] = sumy(Y);
        for( j = 1 ; j<2;j++){
            A[j][i] = sumxy(Y,X); 
        }
    }
    //console.log(A);
    for( i = 0 ; i <= A.length ; i++)
    {
    for(j = i+1 ; j < A.length ; j++ )
    {
        x = A[j][i] / A[i][i]
        for(let k = 0 ; k <= A.length ; k++)
        {
        A[j][k] = A[j][k] - (x * A[i][k])
        //console.log(A)
        }
    }
    }
    y[n1-1]=A[n1-1][n1]/A[n1-1][n1-1]
    for(l = n1-1 ; l >= 0 ; l-- )
    {
    let sum = 0
        for( j = l ; j <= n1 ; j++)
        {   
            sum += (A[l][j]*y[j])
            console.log(A[l][j]);
            console.log("y[j] = "+y[j]);
            console.log("sum = "+sum);
        }
        y[l]=(A[l][n1]-sum)/A[l][l];
        console.log("A[l][n1-1] = "+ A[l][n1]);
        console.log("A[l][l] = "+A[l][l]);
    }
    for(let i = 0 ; i < n1 ; i++)
    {
    console.log(y[i])
    }
    return y;
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
            <div id = 'Showans' style={{paddingLeft:'145px',paddingTop:'50px'}}></div>
            </div>
            </div>
        )
    }
    