import { useState } from "react";
import { useDispatch } from "react-redux";


function NewProduct() {
    
    const[product, setProduct] = useState({name:"", price:0})
    
    const dispatch = useDispatch();
    return <div style={{border:"1px solid red"}}>

        <h2>Add new product</h2>

        Name: <input type="text" onChange={(e) => setProduct({ ...product, name: e.target.value })} /><br />
        Price: <input type="text" onChange={(e) => setProduct({ ...product, price: e.target.value })} /><br />

        <input type="button" value="ADD" onClick={() => dispatch({ type: "ADD", payload: product })} /><br />
        
    </div>

}
export default NewProduct;