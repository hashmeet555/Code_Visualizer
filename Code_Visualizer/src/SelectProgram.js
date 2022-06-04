import React, {useState} from 'react';

export default function SelectProgram(props) {
  const [program, setProgram] = useState('');
  const opts = [
    {
      value:"A",
      label:"Addition/Subtraction"
    },{
      value:"B",
      label:"Multiplication/Division"
    },{
      value:"C",
      label:"Looping (Repetition)"
    },{
      value:"D",
      label:"Conditional flow (if/else)"
    },{
      value:"E",
      label:"Recursion (call stacks)"
    },{
      value:"F",
      label:"Continue-GoTo statements"
    },{
      value:"G",
      label:"Sorting ( Bubble sort )"
    }

  ]
    return (
      <>
         {program.length == 0 && 
         <div style={{height:"100vh",background:"#000",color:"#fff"}}>
         Select Program:  


<div style={{display:"flex",flexDirection:"column",flexWrap:"wrap"}} >

{opts.map(o=>(
  <div onClick={(e)=>{setProgram(o.value);props.passSelection(o.value)}} style={{
      padding: "20px",
      background: "#fff",
      color: "red",
      borderRadius: "20px",
      margin: "10px",
      cursor:"pointer"
}}>
 {o.label}
 </div>
))}


</div>

       </div>
       }     
       {
         program.length > 0 &&
         <div onClick={(e)=>{setProgram('');props.passSelection('')}} className='topSelDiv' style={{color:"#fff",cursor:"pointer",height:"30px"}}>
           {"< Back"}
         </div>
       }
      </>

    );
  } ;