import React from "react";
import LatestReads from "./latestReads";
import About from "./about";
import OnTheTBR from "./onTheTBR";

function MainContent(props) {

    return (
        <div className="MainContent">
            <LatestReads bookBoxData = {props}/>
            {console.log(props)}
            <About />
            <OnTheTBR /> 
        </div>
    )
}

export default MainContent