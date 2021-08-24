import React from "react";
import LatestReads from "./latestReads";
import About from "./about";
import OnTheTBR from "./onTheTBR";

function MainContent({bookBoxData}) {

    return (
        <div className="MainContent">
            <LatestReads bookBoxData = {bookBoxData}/>
            <About />
            <OnTheTBR bookBoxData={bookBoxData}/> 
        </div>
    )
}

export default MainContent