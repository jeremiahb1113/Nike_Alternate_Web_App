function Nav(){

    return(
        <div className="flex-container">

            <ul className="nav-bar">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Me</a></li>
                <li><a href="#">Sign up</a></li>
                <li><a href="#">Sign in/Sign out</a></li>
                <li>Shoes
                <ul className="drop-down">
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">Mens</a></li>
                    <li><a href="#">Womens</a></li>
                </ul>
                </li>

            </ul>
           
        </div>
    )
}

export default Nav;