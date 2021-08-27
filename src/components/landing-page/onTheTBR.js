import React from "react";
import BookBox from "../global-component/bookBox";
import Button from "../global-component/button";

function OnTheTBR({bookBoxData}) {
    

    const undreadBooks = bookBoxData.filter(b => !b.read)

    return (
        <div className="OnTheTBR">
            <h2>What’s on our TBR?</h2>
            <div className="BookBoxContainer">
               {undreadBooks.map((book, index) => {
                   if (index < 4) {
                       return (
                        <BookBox 
                        key={index}
                        title={book.title} 
                        author={book.author}
                        image = {book.bookCover.url}
                        slug={book.slug}
                        grade={"1"}
                        />
                        )
                   }
               }
             )}
            </div>
            <Button />
        </div>
    )
}

export default OnTheTBR