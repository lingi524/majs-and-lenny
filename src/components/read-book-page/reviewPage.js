import React from "react";
import Button from "../global-component/button";
import Footer from "../global-component/footer";
import Menu from "../global-component/menu";
import BookTemplate from "../images/bookTemplateHolder.jpeg"
import MightAlsoLike from "./mightAlsoLike";



function ReviewPage() {

    return (
        <div className="ReviewPage">
            <Menu />
            <div className="ReviewPageContainer">
            <p className="BodyText">Review</p>
            <h1>The Haunting of Hill House</h1>
            <h2>Shirely Jackson</h2>
            <img className="BookPageBook" src={BookTemplate} alt="The book we're reading this month" />
            <div className="ReviewPageRectangle">
                <p>
                   <span>
                    Author origin
                    Year of publication
                    Number of pages
                    What genre is it?
                    Who decided? 
                    </span>
                    <span className="BodyText">
                    America
                    1959
                    246
                    Gothic Horror
                    Maja
                    </span>
                </p>
            </div>
            </div>
            <Button />
            <MightAlsoLike />
            <Footer />
        </div>
    )
}

export default ReviewPage