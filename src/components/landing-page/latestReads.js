import React from "react";
import BookBox from "../global-component/bookBox";
import Button from "../global-component/button";

function LatestReads({bookBoxData}) {

    return (
        <div className="LatestReads">
            <h2>Our latest reads</h2>
            <div className="BookBoxContainer">
                {/* add map function */}
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