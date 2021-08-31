import React from "react";
import BookBox from "../global-component/bookBox";



function MainReadContent({bookBoxData}) {

    const readBooks = bookBoxData.filter(b => b.read)

    return (
        <div className="MainReadContent">
            <h1>Our latest reads</h1>
            <div className="BookBoxContainer">
            {readBooks.map((book)=>(
                    <BookBox 
                    key={book.slug}
                    title={book.title} 
                    author={book.author}
                    grade={book.grade}
                    image={book.bookCover.url}
                    slug={book.slug}
                    read={book.read}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainReadContent