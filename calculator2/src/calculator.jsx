import React, {useState} from 'react';

function Calculate(){

    const [displayvalue, setDisplayvalue] =useState("");
   

    const ClearEverything =(index)=>{
        setDisplayvalue("");
    }

    const DisplayNumbers =(value)=>{
        setDisplayvalue(displayvalue + value);
        
    }
    const Evaluate=()=>{
        const result =eval(displayvalue);
setDisplayvalue(result.toString());
    }
  
    
return(
<div className='calcontainerdiv'>
    <div className='firstcontainer'>
        <div className='inputdivv'></div>
    <input type='text' className='input' value={displayvalue}></input>
        <div className='xdiv'>
            <button className='xbtn' onClick={()=>ClearEverything("c")}>x</button>
            </div>
    </div>
     
    <div className='toptoolsdiv'>
        <div className='cdiv'><button className='cbtn' onClick={()=>ClearEverything("c")}>c</button></div>
        <div className='bracketdiv'><button className='bracketbtn' onClick={()=>DisplayNumbers("()")}>()</button></div>
        <div className='percentdiv'><button className='percentbtn' onClick={()=>DisplayNumbers("%")}>%</button></div>
        <div className='divisiondiv'><button className='divisionbtn' onClick={()=>DisplayNumbers("/")}>/</button></div>
    </div>

    <div className='row2div'>
        <div className='cdiv'><button className='cbtn' onClick={()=>DisplayNumbers("7")}>7</button></div>
        <div className='bracketdiv'><button className='bracketbtn' onClick={()=>DisplayNumbers("8")}>8</button></div>
        <div className='percentdiv'><button className='percentbtn' onClick={()=>DisplayNumbers("9")}>9</button></div>
        <div className='divisiondiv'><button className='divisionbtn' onClick={()=>DisplayNumbers("*")}>*</button></div>
    </div>

    <div className='row3div'>
        <div className='cdiv'><button className='cbtn' onClick={()=>DisplayNumbers("4")}>4</button></div>
        <div className='bracketdiv'><button className='bracketbtn' onClick={()=>DisplayNumbers("5")}>5</button></div>
        <div className='percentdiv'><button className='percentbtn' onClick={()=>DisplayNumbers("6")}>6</button></div>
        <div className='divisiondiv'><button className='divisionbtn' onClick={()=>DisplayNumbers("-")}>-</button></div>
    </div>

    <div className='row4div'>
        <div className='cdiv'><button className='cbtn' onClick={()=>DisplayNumbers("1")}>1</button></div>
        <div className='bracketdiv'><button className='bracketbtn' onClick={()=>DisplayNumbers("2")}>2</button></div>
        <div className='percentdiv'><button className='percentbtn' onClick={()=>DisplayNumbers("3")}>3</button></div>
        <div className='divisiondiv'><button className='divisionbtn' onClick={()=>DisplayNumbers("+")}>+</button></div>
    </div>

    <div className='row5div'>
        <div className='cdiv'><button className='cbtn' onClick={()=>DisplayNumbers("0")}>0</button></div>
        <div className='bracketdiv'><button className='bracketbtn' onClick={()=>DisplayNumbers("00")}>00</button></div>
        <div className='percentdiv'><button className='percentbtn' onClick={()=>DisplayNumbers(".")}>.</button></div>
        <div className='divisiondiv'><button className='divisionbtn' onClick={()=>Evaluate("=")}>=</button></div>
    </div>
</div>

);
}
export default Calculate;