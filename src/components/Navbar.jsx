import React from "react";

import "../static/css/Navbar.css"


const Navbar = () => {
    return (

        <nav>

            <div id="nav-title-div">
                <a href="/"><h1>Buttoner</h1></a>
            </div>

            <div id="nav-items-div">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </div>
        </nav>
    );
}

export default Navbar;
