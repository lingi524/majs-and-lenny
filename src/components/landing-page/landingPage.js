import React from "react";
import Footer from "../global-component/footer";
import Header from "./header";
import MainContent from "./mainContent";

function LandingPage(props) {

    return (
        <div className="LandingPage">
            <Header />
            <MainContent bookBoxData = {props}/>
            {console.log(props)}
            <Footer />
        </div>
    )
}

export default LandingPage