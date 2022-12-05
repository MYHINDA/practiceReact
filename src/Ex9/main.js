import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import UserComp from "./users";
import axios from "axios";


function MainComp() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        async function fetchData(){
            let resp = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(resp.data)
        }
        fetchData()
    },[])

    return <div>
        <ul>
        {
        users.map(item =>{
            return <div>
                <li key={item.id}> <Link to={"/user/" + item.id} >{item.name}</Link></li>
                
        </div>
        })
        }
        </ul>
    </div>
}

export default MainComp;