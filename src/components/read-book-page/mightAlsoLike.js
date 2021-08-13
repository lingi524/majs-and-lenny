import React from "react";
import BookBox from "../global-component/bookBox";

function MightAlsoLike() {

    return (
        <div className="MightAlsoLike">
            <h2>You might also like these books</h2>
            <div className="BookBoxContainer">
            <BookBox />
            <BookBox />
            </div>
        </div>
    )
}

export default MightAlsoLike