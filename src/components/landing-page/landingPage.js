import React from "react";
import Footer from "../global-component/footer";
import Header from "./header";
import MainContent from "./mainContent";

function LandingPage({bookBoxData}) {

    return (
        <div className="LandingPage">
            <Header bookBoxData = {bookBoxData}/>
            <MainContent bookBoxData = {bookBoxData}/>
            <Footer />
        </div>
    )
}

export default LandingPage