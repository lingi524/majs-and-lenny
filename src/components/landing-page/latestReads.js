import React from "react";
import BookBox from "../global-component/bookBox";
import Button from "../global-component/button";

function LatestReads({bookBoxData}) {

    return (
        <div className="LatestReads">
            <h2>Our latest reads</h2>
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

export default LatestReads