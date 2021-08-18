import React from "react";
import Footer from "../global-component/footer";
import Menu from "../global-component/menu";
import ErrorPic from "../images/error.JPG"



function Error() {

    return (
        <div className="Error">
            <Menu />
            
            <div className="ErrorContent">
            <h1>404. <br /> Whoops! Nothing to see here</h1>
            <img src={ErrorPic} alt="Picture of Linnéa in a red suit holding a fire alarm sign" />
            </div>
            <Footer />
        </div>
    )
}

export default Error