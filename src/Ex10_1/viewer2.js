import { useSelector } from "react-redux";


function Viewer2() {

    const store = useSelector(state=>state)
    return <div style={{border:"1px solid blue"}}>
        <table border="1">
            {
                store.users.filter(user=>user.age >18).map(item => {
                    return<tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                })
            }
        </table>
    </div>
}
export default Viewer2;