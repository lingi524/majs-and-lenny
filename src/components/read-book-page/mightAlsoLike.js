import React from "react";
import BookBox from "../global-component/bookBox";



function MightAlsoLike({bookBoxData}) {

    function refreshPage(){
        window.location.reload();
    }

    const bookToDisplay = bookBoxData.find(({slug})=>slug===window.location.pathname.substring(6));
    console.log(bookToDisplay)
    const recommendedBooks = bookToDisplay.youMightAlsoLikeCollection.items;
    console.log(recommendedBooks)


    return (
        <div className="MightAlsoLike">
            <h2>You might also like these books</h2>
            <div className="BookBoxContainer">
          
            {recommendedBooks.map((b, index) => {
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
