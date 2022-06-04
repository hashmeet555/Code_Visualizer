export default function ConsoleArea(props) {
    return (
      <div   style={{height:"50vh",background:"#1E1E1E",color:"green",width:"50%"}}  >
        
       Console Area

       <div style={{margin: "20px",whiteSpace: "pre-wrap",fontSize: "17px",color: "#fff"}}>
      {String(`Output : 

      The sum of numbers is: ${props.sum} 
`)}
  </div>

        
      </div>
    );
  } ;