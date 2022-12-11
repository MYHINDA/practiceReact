import { useSelector } from "react-redux";

    function Viewer() {
        const store = useSelector(state=>state)
        return <div>

            <h2>viewer</h2>

            {store.counter}
            
        </div>
    }
export default Viewer;