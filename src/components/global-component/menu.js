import React from "react";
import LogoSmall from "../images/Logo-grey-small.png";

function Menu() {

    return (
        <div className="Menu">
            <img src={LogoSmall} />
            <a>HOME</a>
            <a>READS</a>
            <a>TBR</a>
            <a>ABOUT</a>
        </div>
    )
}

export default Menu