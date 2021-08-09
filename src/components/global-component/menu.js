import React from "react";
import LogoSmall from "../images/Logo-grey-small.png";

function Menu() {

    return (
        <div className="Menu">
            <img src={LogoSmall} alt="Majs & Lenny logo small" />
            <a>HOME</a>
            <a>READS</a>
            <a>TBR</a>
            <a>ABOUT</a>
        </div>
    )
}

export default Menu