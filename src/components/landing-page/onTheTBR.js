import React from "react";
import BookBox from "../global-component/bookBox";
import Button from "../global-component/button";

function OnTheTBR({bookBoxData}) {

    return (
        <div className="OnTheTBR">
            <h2>What’s on our TBR?</h2>
            <div className="BookBoxContainer">
                {bookBoxData.map((book)=>(
                    <BookBox 
                    key={book.slug}
                    title={book.title} 
                    author={book.author}
                    grade={book.grade}
                    image={book.bookCover.url}
                    />
                ))}
            </div>
            <Button />
        </div>
    )
}

export default OnTheTBR