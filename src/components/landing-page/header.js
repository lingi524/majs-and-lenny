import React from "react";
import Menu from "../global-component/menu";
import BookTemplate from "../images/bookTemplateHolder.jpeg"
import BigLogo from "../images/Logo-grey.png"


function Header() {

    return (
        <div className="Header">
            <Menu />

            <div className="HeaderContainer">

                <div className="LogoContainer">
                    <img className="BigLogo" src={BigLogo} />
                    <div className="LogoText"><p>A two woman book club that<br />
                        reads (almost) anything<br />
                        and likes good drinks</p>
                    </div>
                </div>

                <div className="BookContainer">
                    <div id="HeaderRectangle">
                        <img className="HeaderBook" src={BookTemplate} />
                    </div>
                    <p>This months read</p>
                </div>

            </div>
        </div >
    )
}

export default Header