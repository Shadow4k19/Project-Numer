import React from "react";
export default function ChamerRule(){
    function Getmat(){
        var Size = document.getElementById("Matnum").value;
        var MatString = "";
        for(var i =  0; i<Size ; i++){
            for(var j = 0 ; j<Size ; j++){
                MatString +=" <input id = 'Matrix'"+i+j+" placeholder=' ' type='number' style='width: '40px''></input>"
            }
            MatString +=" |"+' '+" <input id = 'Matrixans'"+i+j+" placeholder=' ' type='number' style='width: '40px''></input><br>";
        }
        console.log(MatString);
        document.getElementById("Matrix").innerHTML = MatString;
    }
    function getmat2(){
        var MatA = document.getElementById("Matrix").value;
        var MatB = document.getElementById("Matrixans").value;
        var ans = Cal(MatA,MatB);
        console.log(ans);
        document.getElementById("Showans").innerHTML = ans;
    }

    function Cal(a,b){
        
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
        <div id = 'Matrix' style={{paddingTop:'10px'}}></div>
        <div style={{paddingLeft:'160px',paddingTop:'20px'}}>
            <button onClick={getmat2}>Calculate</button>
        </div>
        <div id = 'Showans'></div>
        </div>
        </div>
    )
}