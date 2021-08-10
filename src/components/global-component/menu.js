import React from "react";
import LogoSmall from "../images/Logo-grey-small.png";

function Menu() {

    return (
        <div className="Menu">
            <img src={LogoSmall} alt="Majs & Lenny logo small" />
            <p>HOME</p>
            <p>READS</p>
            <p>TBR</p>
            <p>ABOUT</p>
        </div>
    )
}

export default Menu