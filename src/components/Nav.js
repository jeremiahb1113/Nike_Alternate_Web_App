function Nav(){

    return(
        <div className="flex-container">

            <ul className="nav-bar">
                <li>Home</li>
                <li>About</li>
                <li>Contact Me</li>
                <li>Sign Up</li>
                <li>Sign in/ sign out</li>
                <li>Shoes
                <ul className="drop-down">
                    <li>Kids</li>
                    <li>Mens</li>
                    <li>Womens</li>
                </ul>
                </li>

            </ul>
           
        </div>
    )
}

export default Nav;