function Page4Comp() {


    return <div>
        <h4>Page 4</h4>
        {sessionStorage["fname"]}<br/><br/>
        {sessionStorage["lname"]}<br/><br/>
        {sessionStorage["city"]}<br/>

    </div>
}

export default Page4Comp;