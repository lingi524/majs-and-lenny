import React from "react";
import BookBox from "../global-component/bookBox";
import Button from "../global-component/button";

function LatestReads({bookBoxData}) {

    const readBooks = bookBoxData.filter(b => b.read)

    // const items = [];
    // {
    //     for (var i = 0; i < 4; i++) {
    //         if (bookBoxData[i].read === true) {
    //     items.push(
    //     <BookBox 
    //     key={i}
    //     title={bookBoxData[i].title} 
    //     author={bookBoxData[i].auhtor}
    //     image = {bookBoxData[i].bookCover.url}
    //     grade={"1"}
    //     />
    //   )} }
    // }

    return (
        <div className="LatestReads">
            <h2>Our latest reads</h2>
            <div className="BookBoxContainer">
            {readBooks.map((b, index) => {
                   if (index < 4) {
                       return (
                        <BookBox 
                        key={index}
                        title={b.title} 
                        author={b.author}
                        image = {b.bookCover.url}
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

export default LatestReads