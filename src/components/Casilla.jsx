
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
    return <button style={casillaStyle}>{props.value}</button>
       
}
export default Casilla