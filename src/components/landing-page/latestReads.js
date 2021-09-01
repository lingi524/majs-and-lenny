import React from "react";
import BookBox from "../global-component/bookBox";
import Button from "../global-component/button";

function LatestReads({bookBoxData}) {

    const readBooks = bookBoxData.filter(b => b.read);
    var bookAmount;

    function windowSize() {
        var width = window.innerWidth;
    
        if (width >600) {
            bookAmount = 3;
        } else if (width <599) {
            bookAmount = 4;
        } else {
            bookAmount = 4;
        }
            console.log(width)
            console.log(bookAmount)
        };
            
        window.addEventListener('resize', windowSize);
  

    return (
        <div className="LatestReads">
            <h2>Our latest reads</h2>
            <div className="BookBoxContainer">
                {}
            {readBooks.map((b, index) => {
                   if (index < {bookAmount}) {
                       return (
                        <BookBox 
                        key={index}
                        title={b.title} 
                        author={b.author}
                        image = {b.bookCover.url}
                        slug={b.slug}
                        grade={b.grade}
                        read={b.read}
                        />
                        )
                   }
               }
             )}
            </div>
            <Button buttonText="See all our latest reads" buttonLink="/allreadbooks"/>
        </div>
    )
}

export default LatestReads