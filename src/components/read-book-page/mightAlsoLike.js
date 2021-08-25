import React from "react";
import BookBox from "../global-component/bookBox";

function MightAlsoLike({bookBoxData}) {
    
    const items = [];
    {
        for (var i = 0; i < 2; i++) {
        // key=i;
        items.push(
        <BookBox 
        key={i}
        title={bookBoxData[i].title} 
        author={bookBoxData[i].auhtor}
        image = {bookBoxData[i].bookCover.url}
        grade={"1"}
        />
      )}
    }

    return (
        <div className="MightAlsoLike">
            <h2>You might also like these books</h2>
            <div className="BookBoxContainer">
          
                {items}
                
            </div>
            
        </div>
    )
}

export default MightAlsoLike
