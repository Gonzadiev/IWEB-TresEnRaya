
const casillaStyle = {
  height: "100px",
  width: "100px",
  padding: 0,
  border: "1px solid gray",
  borderRadius: 0,
  backgroundColor: "#eee",
  color: "black"
}


function Casilla (props){

  function casillaClick(){
    if (props.value === "-"){
      props.appClick(props.row, props.col)
    } else {
      console.log("Casilla ocupada")
    }
  }
    return <button style={casillaStyle} onClick={casillaClick} className={props.value === "-" ? "libre" : "casilla_ocupada"}>
      {props.value}
    </button>
       
}
export default Casilla