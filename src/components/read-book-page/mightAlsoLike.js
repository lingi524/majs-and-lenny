import React from "react";
import BookBox from "../global-component/bookBox";


function MightAlsoLike({bookBoxData}) {

    const bookToDisplay = bookBoxData.find(({slug})=>slug===window.location.pathname.substring(6))

    
    const items = [];
    {
        for (var i = 0; i < 2; i++) {
        items.push(
   
        <BookBox 
        key={i}
        title={bookBoxData[i].title} 
        author={bookBoxData[i].author}
        image = {bookBoxData[i].bookCover.url}
        slug = {bookBoxData[i].slug}
        grade={bookBoxData[i].grade}
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
