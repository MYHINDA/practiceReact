import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function Total() {

    const store = useSelector(state => state)

    const [price, setPrice] = useState(0)
    useEffect(()=>{

        setPrice(store.products.reduce((total, x) => total + parseInt(x.price), 0))
    },[store.products.length])


    return <div style={{ border: "1px solid red" }}>
        
        Total:{price}
       
    </div>
}
export default Total;