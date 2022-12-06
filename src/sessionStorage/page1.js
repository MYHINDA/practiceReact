import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import Page2Comp from "./page2";
import Page3Comp from './page3';
import Page4Comp from './page4';



function Page1Comp() {
    const nevigate = useNavigate()
    const next = () => {
        nevigate("/page2")
    }

    return <div>
        
        <Routes>
            <Route path="/page2" element=<Page2Comp /> />
            <Route path='/page3' element=<Page3Comp /> />
            <Route path='/page4' element=<Page4Comp /> />
        </Routes>
            <h1>Welcome Page</h1>
            <input type="button" value="strart" onClick={()=>next() } />
    </div>
}

export default Page1Comp;


