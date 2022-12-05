import { Link } from "react-router-dom"



function ContactUsComp() {
    return <div style={{ width: "600px", height: "400px", backgroundColor: "red" }}>
        
        <h1>Contact us</h1>
        <Link to="/about" >about us </Link><br /><br />

    </div>
}

export default ContactUsComp