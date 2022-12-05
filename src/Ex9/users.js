import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

function UserComp() {

    const param = useParams()

    const [user, setUser] = useState({})


    useEffect(() => {
        async function fetchData() {
            let resp = await axios.get("https://jsonplaceholder.typicode.com/users/" + param.id)
            setUser(resp.data)
        }
        fetchData();
    }, [param.id]);
    

    return <div>

        ID:{user.id} <br/>
        Name: {user.name}<br />
        
        <Link to="/posts">Posts</Link><br />
        <Link to="/todos">Todos</Link>
        {/* <Outlet/> */}
    </div>
}
export default UserComp;