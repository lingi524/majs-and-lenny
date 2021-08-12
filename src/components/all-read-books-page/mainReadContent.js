import React from "react";
import BookBox from "../global-component/bookBox";



function MainReadContent() {

    return (
        <div className="MainReadContent">
            <div className="AllReads">
            
            
            <h1>Our latest reads</h1>
            <div className="BookBoxContainer">
            <BookBox />
            <BookBox />
            <BookBox />
            <BookBox />
            <BookBox />
            <BookBox />
            <BookBox />
            <BookBox />
            <BookBox />
            <BookBox />
            <BookBox />
            <BookBox />
            </div>
        </div>
        </div>
    )
}

export default MainReadContent