import NewProduct from "./newProduct";
import Viewer from "./productsView";
import Total from "./total";

function Host() {
    return <div>
        <div style={{ width: "50%", float: "left" }}>

            <Total /> <br /><br /><br /><br /><br />
            <NewProduct />
        </div>

        <div style={{ width: "50%", float: "right" }}>
            <Viewer />
        </div>
    </div>
}
export default Host;