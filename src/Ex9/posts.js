import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostComp() {

    const param = useParams()

    const [posts, setPosts] = useState([])


    useEffect(() => {
        async function fetchData() {

            let resp = await axios.get("https://jsonplaceholder.typicode.com/posts/?userid="+ param.id);
            setPosts(resp.data);
        }
        fetchData();
    }, []);


    return <div>

        Title:
        <ul>
            {
                posts.map((item) => {
                    return <li key={posts.id}>{item.title}</li>
                })
            }
        
</ul>
    </div>
}
export default PostComp;