import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Page2Comp() {
    
    const nevigate = useNavigate()
    const [user, setUser] = useState({ "firstName": "", "lastName": "" })
    
    const saveData = (e) => {
        // e.preventDefoult()
        
            sessionStorage["fname"] = user.firstName
            sessionStorage["lname"] = user.lastName

            nevigate("/page3")
        


    }
    return <div>

        <h2>page2</h2> <br />
        <form onSubmit={(e) => saveData(e)}>
            First name: <input type={"text"} onChange={(e) => setUser({ ...user, "firstName": e.target.value })} /><br /><br />
            Last name: <input type={"text"} onChange={(e) => setUser({ ...user, "lastName": e.target.value })} /><br /><br />
            <input type="submit" value="Submit" />
        </form>

    </div>


}
export default Page2Comp
