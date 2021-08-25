import React from "react";
import BookBox from "../global-component/bookBox";
import Button from "../global-component/button";

function OnTheTBR({bookBoxData}) {
    

    const items = [];
    {
        for (var i = 0; i < 4; i++) {
         if (bookBoxData[i].read === false) {
            items.push(
            <BookBox 
            key={i}
            title={bookBoxData[i].title} 
            author={bookBoxData[i].auhtor}
            image = {bookBoxData[i].bookCover.url}
            grade={"1"}
            />
            )  
             }
        }
    }

    return (
        <div className="OnTheTBR">
            <h2>What’s on our TBR?</h2>
            <div className="BookBoxContainer">
               {items}
            </div>
            <Button />
        </div>
    )
}

export default OnTheTBR