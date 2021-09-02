import React from "react";
import BookBox from "../global-component/bookBox";
import Button from "../global-component/button";

function LatestReads({bookBoxData}) {

    const readBooks = bookBoxData.filter(b => b.read);
  

    return (
        <div className="LatestReads">
            <h2>Our latest reads</h2>
            <div className="BookBoxContainer">
                {}
            {readBooks.map((b, index) => {
                   if (index < 4) {
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