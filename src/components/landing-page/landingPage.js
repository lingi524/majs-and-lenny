import React from "react";
import Footer from "../global-component/footer";
import Header from "./header";
import MainContent from "./mainContent";

function LandingPage() {

    return (
        <div className="LandingPage">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default LandingPage