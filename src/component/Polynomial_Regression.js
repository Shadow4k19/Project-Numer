import React from "react";
import './Bisection.css';

export default function PolynomialRegression(){
    function getMat(){
        var Matx = [];
        var Maty = [];
        for(var i = 0 ; i < 9 ; i++){
            Matx.push(document.getElementById("Matnum"+i).value);
            Maty.push(document.getElementById("Matnumy"+i).value);
        }
        console.log(Matx+Maty);
        var ans = Cal(Matx,Maty);
        document.getElementById("Showans").innerHTML = "ans = "+ans +" PLS NOT F";
    }
    function Cal(X,Y){
    //console.log(X+Y);
    var A = [[0,0,0],[0,0,0],[0,0,0]];
    //var B = [[0],[0]];
    var n = X.length;
    var n1 = A.length;
    var x;
    var j,l;
    var y = new Array(n1)
    var count = 0;
    function sumx(x,pow){
        let sum  = 0;
        for(let i = 0 ; i< x.length ; i++){
            sum += Math.pow(x[i],pow);
        }
        return sum;
    }
    function sumy(y){
        let sum  = 0;
        for(let i = 0 ; i< y.length ; i++){
            sum += y[i];
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
    for(let i = 0 ; i < 3; i++ ){
        if(i!==2){
            count = 1;
        }
        else{
            count = 2;
        }
        A[0][0] = n;
        for(let j = 0 ; j<3 ; j++){
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
    
    for(let i = 3 ; i <=3 ; i++){
        A[0][3] = sumy(Y);
        for(let j = 1 ; j<3;j++){
            A[j][i] = sumxy(Y,X);
            if(j===2&&i===3){
                A[j][i] = sumxxy(Y,X,2);
            } 
        }
    }
    //console.log(A);
    for(let i = 0 ; i <= A.length ; i++)
    {
      for(let j = i+1 ; j < A.length ; j++ )
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
        for( j = l+1 ; j <= n1 ; j++)
        {   
            sum += (A[l][j]*y[j])
        }
        y[l]=(A[l][n1+1]-sum)/A[l][l];
    }
    for(let i = 0 ; i <= A.length ; i++)
    {
      for(let j = i+1 ; j < A.length ; j++ )
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
    console.log(y[2]);
    for(l = n1-1 ; l >= 0 ; l-- )
    {
      let sum = 0
        for( j = l ; j < n1 ; j++)
        {   
            console.log("A[i][j] = "+A[l][j]);
            console.log("Y[j] = "+y[j]);
            sum += (A[l][j]*y[j])
            console.log("Sum = "+sum);
        }
        console.log("l = " +l);
        y[l]=(A[l][n1]-sum)/A[l][l];
        console.log("Y[l] = "+y[l]);
    }
    return y;
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
            </div>
            </div>
        )
    }
    