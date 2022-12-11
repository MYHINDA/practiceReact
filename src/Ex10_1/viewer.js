import { useSelector } from "react-redux";
import Viewer2 from "./viewer2";

    function Viewer() {
        const store = useSelector(state => state)
        

        return <div style={{ border: "1px solid green" }}>


            <table border="1px">
                {
                    store.users.map(item => {
                        return<tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    })
                }
            </table>
            <Viewer2/>
            
        </div>
    }
export default Viewer;