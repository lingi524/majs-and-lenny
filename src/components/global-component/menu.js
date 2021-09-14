import React from "react";
// import LogoSmall from "../images/Logo-grey-small.png";
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Headroom from "react-headroom";


function Menu() {

    return (
        <Headroom >
        <div className="NavIndex">
        <div className="Menu">
            <div className="Menu-Text">
            {/* <img src={LogoSmall} alt="Majs & Lenny logo small" /> */}
            <Link to="/"> <p>HOME</p></Link>
            <Link to="/allreadbooks"> <p>READS</p> </Link>
            <Link to="/alltbrbooks"><p>TBR</p></Link>
            <HashLink smooth to="/#AboutSection"><p>ABOUT</p></HashLink>
            </div>
        </div>
        </div>
        </Headroom>
    )
}

export default Menu