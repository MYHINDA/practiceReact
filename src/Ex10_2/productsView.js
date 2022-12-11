import { useDispatch, useSelector } from "react-redux";
import Total from "./total";

    function Viewer() {
        const store = useSelector(state => state)

        const dispatch = useDispatch()
        

        return <div style={{ border: "1px solid blue" }}>


            <h2> current  products</h2>            
                {
                store.products.map((item, index) => {

                    return <div key={index} style={{border:"1px solid green"}}>
                        {item.name}<br/><br/>
                        {item.price}<br /><br /><br /><br />
                        <input type="button" value="Remove" onClick={() => dispatch({type:"DELETE", payload:item})}/>
                        
                    </div>
                })  
                }
            
            
        </div>
    }
export default Viewer;