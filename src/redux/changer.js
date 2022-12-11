import { useDispatch } from "react-redux";


function Changer() {

    const dispatch = useDispatch();
    return <div>

        <h2>Changer</h2>
        <input type="button" value={"+"} onClick={() => dispatch({ type: "ADD", payload: 2 })} /><br />
        <input type="button" value={"-"} onClick={() => dispatch({ type: "REMOVE", payload: 1 })} />

    </div>
}
export default Changer;