import React from "react";
import BookTemplate from "../images/bookTemplateHolder.jpeg"

const character = String.fromCharCode(9733);
var rating = "4.5";


function BookBox() {

    return (
        <div className="BookBox">
            <div className="BookBoxRectangle">
                <img className="BookBoxBookCover" src={BookTemplate} alt="The book we're reading this month" />
                <div className="BookBoxRectangleContainer">

                <p className="BookTitle">The Haunting of Hill House</p>
                <p className="BookAuthor">Shirley Jackson</p>
                <p className="Rating"><span className="Star">{character}</span>{rating}</p>
                </div>
            </div>
        </div>
    )
}

export default BookBox