import React from "react";
import BookBox from "../global-component/bookBox";

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
        </div>
    )
}

export default LatestReads