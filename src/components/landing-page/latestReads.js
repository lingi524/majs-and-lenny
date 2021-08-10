import React from "react";
import BookBox from "../global-component/bookBox";
import Button from "../global-component/button";

function LatestReads() {

    return (
        <div className="LatestReads">
            <h2>Our latest reads</h2>
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

export default LatestReads