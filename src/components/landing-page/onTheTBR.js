import React from "react";
import BookBox from "../global-component/bookBox";
import Button from "../global-component/button";

function OnTheTBR() {

    return (
        <div className="OnTheTBR">
            <h2>What’s on our TBR?</h2>
            <div className="BookBoxContainer">
            <BookBox />
            <BookBox />
            <BookBox />
            <BookBox />
            </div>
            <Button />
        </div>
    )
}

export default OnTheTBR