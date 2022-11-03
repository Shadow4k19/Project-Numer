import React from "react";

export default function Guass_Elimination(){
    function Getmat(){
        var Size = document.getElementById("Matnum").value;
        var MatString = "";
        for(var i =  0; i<Size ; i++){
            for(var j = 0 ; j<=Size ; j++){
                MatString +=" <input id = 'Matrix"+i+j+"' className = 'inputmat' type='number' style='width: 40px'></input>"
            }
            MatString +="<br>";
        }
        console.log(MatString);
        document.getElementById("Matrix").innerHTML = MatString;
    }
    function getmat2(){
        var Size = document.getElementById("Matnum").value;
        var MatA = [];
        for(var i = 0 ; i<Size ; i++){
            MatA.push([]);
            for(var j = 0 ; j<=Size ; j++){
                MatA[i].push(document.getElementById("Matrix"+i+j).value);
            }
        }
        var ans = Cal(MatA,Size);
        console.log(ans);
        document.getElementById("Showans").innerHTML = ans;
    }

    function Cal(a,size){
        var x = 0;
        var y = new Array(size);
        var n = a.length-1;
        for(var i = 0 ; i <= a.length ; i++)
        {
          for(var j = i+1 ; j < a.length ; j++ )
          {
            x = a[j][i] / a[i][i]
            for(var k = 0 ; k <= a.length ; k++)
            {
              a[j][k] = a[j][k] - (x * a[i][k])
              console.log(a)
            }
          }
        }
        y[n]=a[n][n+1]/a[n][n]
        for(var l = n-1 ; l >= 0 ; l-- )
        {
          let sum = 0
            for(j = l+1 ; j <= n ; j++)
            {  
                sum += (a[l][j]*y[j])
            }
            y[l]=(a[l][n+1]-sum)/a[l][l];
        }
        for(i = 0 ; i < size  ;i++){
            y[i] = y[i].toFixed(3);
        }
        return y;
    }
    return(
        <div><h1 style={{color:'black',paddingLeft:'625px',paddingTop:'75px'}}>Guass_Elimination</h1>
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
        <div id = 'Showans' style={{paddingLeft:'95px',paddingTop:'20px'}}></div>
        </div>
        </div>
    )
}