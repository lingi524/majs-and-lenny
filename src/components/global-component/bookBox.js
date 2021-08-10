import React from "react";
import BookTemplate from "../images/bookTemplateHolder.jpeg"


function BookBox() {

    return (
        <div className="BookBox">
            <div className="BookBoxRectangle">
                <img className="BookBoxBookCover" src={BookTemplate} alt="The book we're reading this month" />
            </div>
        </div>
    )
}

export default BookBox