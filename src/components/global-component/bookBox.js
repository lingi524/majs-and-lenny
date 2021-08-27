import React from "react";
import {Link} from "react-router-dom";


const character = String.fromCharCode(9733);
var rating = "4.5";


function BookBox(props) {
    return (
        <Link to={`/book/${props.slug}`}> 
        <div className="BookBox">
            <div className="BookBoxRectangle">
                <img className="BookBoxBookCover" src={props.image} alt="A book we're reading" />
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