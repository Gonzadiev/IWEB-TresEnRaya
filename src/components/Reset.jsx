
import Button from 'react-bootstrap/Button';

function Reset(props) {
    return(
        <div>
            <Button variant="warning" onClick={props.resetClick}>RESET</Button>
        </div>
    )
}
export default Reset