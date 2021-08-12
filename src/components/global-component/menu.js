import React from "react";
import LogoSmall from "../images/Logo-grey-small.png";
import {Link} from "react-router-dom";

function Menu() {

    return (
        <div className="Menu">
            {/* <img src={LogoSmall} alt="Majs & Lenny logo small" /> */}
            <Link to="/"> <p>HOME</p></Link>
            <Link to="/allreadbooks"> <p>READS</p> </Link>
            <Link to="/alltbrbooks"><p>TBR</p></Link>
            <Link to="/"><p>ABOUT</p></Link>
        </div>
    )
}

export default Menu