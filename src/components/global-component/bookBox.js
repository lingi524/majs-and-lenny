import React from "react";
import {Link} from "react-router-dom";

import BookTemplate from "../images/bookTemplateHolder.jpeg"

const character = String.fromCharCode(9733);
var rating = "4.5";


function BookBox(props) {

    return (
        <Link to="/reviewPage"> 
        <div className="BookBox">
            <div className="BookBoxRectangle">
                <img className="BookBoxBookCover" src={props.image} alt="The book we're reading this month" />
                <div className="BookBoxRectangleContainer">
                <p className="BookTitle">{props.title}</p>
                <p className="BookAuthor">{props.author}</p>
                <p className="Rating"><span className="Star">{character}</span>{rating}</p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default BookBox