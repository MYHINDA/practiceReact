import {Route, Routes, Link} from 'react-router-dom'
import AboutUsComp from './aboutUs';
import ContactUsComp from './contactUs';


function MainPageComp() {
    return <div>
        <h1>Hello from SPA</h1>
        <Link to="/contact">To contact us </Link><br/><br/>
        <Link to="/about">about us </Link>
        <Routes>
            <Route path="/" element={<ContactUsComp/>} />
            <Route path="/contact" element={<ContactUsComp />} />
            <Route path="/about" element={<AboutUsComp />} />

        </Routes>
    </div>
}
export default MainPageComp;
