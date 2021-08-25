import React from "react";
import Button from "../global-component/button";
import Footer from "../global-component/footer";
import Menu from "../global-component/menu";
import BookTemplate from "../images/bookTemplateHolder.jpeg"
import MightAlsoLike from "./mightAlsoLike";

var reviewText = "Dr. Montague, an occult scholar, and his team--Theodora, his assistant; Eleanor, a fragile young woman with a close acquaintance with the paranormal; and Luke, the future heir of Hill House--conduct an unusual research project in a reputedly haunted house. ";



function ReviewPage({bookBoxData}) {

    return (
        <div className="ReviewPage">
            <Menu />
            <div className="ReviewPageContainer">
            <p className="BodyText">Review</p>
            <h1>The Haunting of Hill House</h1>
            <h2>Shirely Jackson</h2>
            <img className="BookPageBook" src={BookTemplate} alt="The book we're reading this month" />
            <p className="ReviewText">{reviewText}</p>
            <div className="ReviewPageRectangle">
                
                   <p className="BookInfo">
                    <span>Authors origin?</span>
                    <span>Year of publication?</span>
                    <span>Number of pages?</span>
                   <span>What genre is it?</span>
                    <span>Who decided?</span>
                    </p>
                    <p className="BookInfoAnswers">
                    <span>America</span>
                    <span>1959</span>
                    <span>246</span>
                    <span>Gothic Horror</span>
                    <span>Maja</span>
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