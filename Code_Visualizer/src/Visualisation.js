export default function Visualisation() {
    return (
      <div  style={{height:"50vh",background:"#fff",color:"#000"}} >
        Visualisation
        <br/>
        <div style={{justifyContent: "center",display: "flex"}}>
        <img style={{height: "250px"}} src={require('./animate.gif')} alt="loading..." />
        </div>
       

      </div>
    );
  } ;