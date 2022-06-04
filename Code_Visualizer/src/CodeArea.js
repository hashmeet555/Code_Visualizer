import React, {useState} from 'react';
import ConsoleArea from './ConsoleArea';
import './App.css';

export default function CodeArea() {
  const [fNum, setfNum] = useState('');
  const [sNum, setsNum] = useState('');
    return (
      <div className="UpperSection">

<div style={{height:"50vh",width:"50%",background:"#3c424e"}} >
        
        Code Area
 
   <div style={{margin: "20px",whiteSpace: "pre-wrap",fontSize: "17px",color: "cornflowerblue"}}>
       {String(`public class SumOfNumbers1 
 {  
 public static void main(String args[])   
 {  
 int n1 = `)}
 <input type='number' value={fNum} onChange={e => setfNum(e.target.value)} />
 {String(`,n2 = `)}
 <input type='number' value={sNum} onChange={e => setsNum(e.target.value)} />
 {String(`,
 sum;  
 sum = n1 + n2;  
 System.out.println("The sum of numbers is: "+sum);  
 }  
 } 
 `)}
   </div>
         
       </div>

<ConsoleArea sum={Number(fNum)+Number(sNum)} />
      </div>
      
    );
  } ;