import React from "react";
import BookBox from "../global-component/bookBox";
import Button from "../global-component/button";

function LatestReads({bookBoxData}) {

    const items = [];
    {
        for (var i = 0; i < 4; i++) {
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
        <div className="LatestReads">
            <h2>Our latest reads</h2>
            <div className="BookBoxContainer">
                {items}
            </div>
            <Button />
        </div>
    )
}

export default LatestReads