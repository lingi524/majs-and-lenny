import React from "react";
import BookBox from "../global-component/bookBox";



function MightAlsoLike({bookBoxData}) {

    function refreshPage(){
        window.location.reload();
    }



    return (
        <div className="MightAlsoLike">
            <h2>You might also like these books</h2>
            <div className="BookBoxContainer">
          
            {bookBoxData.map((b, index) => {
                   if (index < 2) {
                       return (
                        <BookBox 
                        key={index}
                        title={b.title} 
                        author={b.author}
                        image = {b.bookCover.url}
                        slug={b.slug}
                        grade={b.grade}
                        onClick={refreshPage}
                        />
                        )
                   } else {
                       return ([])
                   }
               }
             )}                
            </div>
            
        </div>
    )
}

export default MightAlsoLike
