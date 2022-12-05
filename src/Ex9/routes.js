import { Link, Route, Routes } from "react-router-dom"
import MainComp from "./main"
import PostComp from "./posts"
import UserComp from "./users"

function RoutesComp() {

    
    return <div>
        <Link to="/main"><h1>Home Page</h1></Link>
        
        <Routes>
            <Route path="/" element={<MainComp />} />
            <Route path="/main" element={<MainComp />} />
            <Route path="/user/:id" element={<UserComp />} />
            <Route path="/posts" element={<PostComp />} />
            {/* <Route path="/todos" element={<TodosComp />} /> */}
        </Routes>

        
    </div>
}
export default RoutesComp