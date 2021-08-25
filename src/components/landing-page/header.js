import React from "react";
import Menu from "../global-component/menu";
import BookTemplate from "../images/bookTemplateHolder.jpeg"
import BigLogo from "../images/Logo-grey.png"


function Header({bookBoxData}) {

    const currentlyReading = bookBoxData.filter(b=>b.currentlyReading)


    return (
        <div className="Header">
            <Menu />

            <div className="HeaderContainer">

                <div className="LogoContainer">
                    <img className="BigLogo" src={BigLogo} alt="Majs&Lenny Logo in a serif font" />
                    <div className="LogoText"><p>A two woman book club that<br />
                        reads (almost) anything<br />
                        and likes good drinks</p>
                    </div>
                </div>

                <div className="BookContainer">
                    <div id="HeaderRectangle">
                        <img className="HeaderBook" src={currentlyReading[0].bookCover.url} alt="The book we're reading this month" />
                    </div>
                    <p>This months read</p>
                </div>

            </div>
        </div >
    )
}

export default Header