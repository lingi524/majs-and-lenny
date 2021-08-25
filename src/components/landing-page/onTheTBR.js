import React from "react";
import BookBox from "../global-component/bookBox";
import Button from "../global-component/button";

function OnTheTBR({bookBoxData}) {
    

    const undreadBooks = bookBoxData.filter(b => !b.read)
    console.log(undreadBooks)

    return (
        <div className="OnTheTBR">
            <h2>What’s on our TBR?</h2>
            <div className="BookBoxContainer">
               {undreadBooks.map((b, index) => {
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

export default OnTheTBR