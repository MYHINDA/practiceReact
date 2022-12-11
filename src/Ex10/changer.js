import { useState } from "react";
import { useDispatch } from "react-redux";
import Viewer from "./viewer"


function Changer() {
    
    const[user, setUser] = useState({id:1, name:"", age:0})
    
    const dispatch = useDispatch();
    return <div style={{border:"1px solid red"}}>

        <h2>Changer</h2>
        ID: <input type="text" onChange={(e) => setUser({ ...user, id: e.target.value })} /><br />
        Name: <input type="text" onChange={(e) => setUser({ ...user, name: e.target.value })} /><br />
        age: <input type="text" onChange={(e) => setUser({ ...user, age: e.target.value })} /><br />

        <input type="button" value={"ADD"} onClick={() => dispatch({ type: "ADD", payload: user })} /><br />
        <input type="button" value={"UPDATE"} onClick={() => dispatch({ type: "UPDATE", payload: user })} /><br />
        <input type="button" value={"DELETE"} onClick={() => dispatch({ type: "DELETE", payload: user.id })} /><br />

        <Viewer/>
    </div>
}
export default Changer;