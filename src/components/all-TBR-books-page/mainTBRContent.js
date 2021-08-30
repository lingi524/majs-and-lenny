import React from "react";
import BookBox from "../global-component/bookBox";


function MainTBRContent({bookBoxData}) {

    const undreadBooks = bookBoxData.filter(b => !b.read)


    return (
        <div className="MainReadContent">
            <h1>What we’re planning to read</h1>
            <div className="BookBoxContainer">
                {undreadBooks.map((book)=>(
                    <BookBox 
                    key={book.slug}
                    title={book.title} 
                    author={book.author}
                    grade={book.grade}
                    slug={book.slug}
                    image={book.bookCover.url}
                    grade={book.grade}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainTBRContent