import React from "react";
import BookBox from "../global-component/bookBox";


function MainTBRContent({bookBoxData}) {

    return (
        <div className="MainReadContent">
            <h1>What we’re planning to read</h1>
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
        </div>
    )
}

export default MainTBRContent