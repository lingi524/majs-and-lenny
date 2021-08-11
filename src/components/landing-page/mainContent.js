import React from "react";
import LatestReads from "./latestReads";
import About from "./about";
import OnTheTBR from "./onTheTBR";

function MainContent() {

    return (
        <div className="MainContent">
            <LatestReads />
            <About />
            <OnTheTBR /> 
        </div>
    )
}

export default MainContent