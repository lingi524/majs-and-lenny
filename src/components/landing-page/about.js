import React from "react";
import AboutImage from "../images/majsandlenny.png"
var aboutHeading = "Who’s behind the club?";
var aboutText = "We’re Maja and Linnéa! (Also known as Majs and Lenny respectively). We met on the first day of university and has since then bonded over our shared love of books, ceramics, and dachshunds. We started this book club when both of us moved to Stockholm in the middle of a burning pandemic and needed a good excuse to hang out and drink wine. We might only be two people, but we read some mighty good books! Look around to find a new favourite.";

function About() {

    return (
        <div className="About">
            <h1>{aboutHeading}</h1>
                <div className="AboutRectangle">
                    <img className="AboutImage" src={AboutImage} alt="Linnéa in a red suit, black turtleneck and a black headband taking a full body mirror selfie. Maja is standing slightly behind her to the right in a brown floral dress. They smile." />
                </div>
            <p className="BodyText"> {aboutText} </p>
        </div>
    )
}

export default About