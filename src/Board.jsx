
function Board(props){
    return(
        <div>
            {
                props.values.map((rowValues, index) => {
                 let row = rowValues.map((value, columnIndex) => {
                    return <button>{value}</button>
                })
                 return <div>{row}</div>
                })
            }
        </div>
    )
}
export default Board