import React from "react";
import Button from "../global-component/button";
import Footer from "../global-component/footer";
import Menu from "../global-component/menu";
import MightAlsoLike from "./mightAlsoLike";




function ReviewPage({bookBoxData}) {

    console.log(bookBoxData)

    return (
        <div className="ReviewPage">
            <Menu />
            <div className="ReviewPageContainer">
            <p className="BodyText">Review</p>
            <h1>{bookBoxData[0].title}</h1>
            <h2>{bookBoxData[0].author}</h2>
            <img className="BookPageBook" src={bookBoxData[0].bookCover.url} alt="The book we're reading this month" />
            <p className="ReviewText">{bookBoxData[0].description.json.content[0].content[0].value}</p>
            <div className="ReviewPageRectangle">
                
                   <p className="BookInfo">
                    <span>Authors origin?</span>
                    <span>Year of publication?</span>
                    <span>Number of pages?</span>
                   <span>What genre is it?</span>
                    <span>Who decided?</span>
                    </p>
                    <p className="BookInfoAnswers">
                    <span>{bookBoxData[0].authorsOrigin}</span>
                    <span>{bookBoxData[0].yearOfPublication}</span>
                    <span>{bookBoxData[0].numberOfPages}</span>
                    <span>{bookBoxData[0].genre}</span>
                    <span>{bookBoxData[0].whoDecidedToReadThis}</span>
                    </p>
            </div>
            </div>
            <Button />
            <MightAlsoLike bookBoxData={bookBoxData}/>
            <Footer />
        </div>
    )
}

export default ReviewPage