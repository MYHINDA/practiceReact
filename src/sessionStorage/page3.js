import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Page3Comp() {
    const [city, setCity] = useState("")
    const nevigate = useNavigate()

    const setSessionStorage = ()=>{
        sessionStorage["city"] = city
        nevigate("/page4")
    }

    return <div>
        <h3>Page 3</h3>

        <select name="city" onChange={e => setCity(e.target.value)}>
            <option value="select">--select--</option>
            <option value="Ashdod"> Ashdod </option>
            <option value="Jerusalem"> Jerusalem </option>
            <option value="Tzfat"> Tzfat </option>

        </select>

        <br /><input type="button" value="save" onClick={() => setSessionStorage()} />
        
    </div>
}
export default Page3Comp