import React from "react";
import AboutImage from "../images/majsandlenny.png"
var aboutHeading = "Who’s behind the club?";

function About() {

    return (
        <div className="About">
            <h1>{aboutHeading}</h1>
            <img className="AboutImage" src={AboutImage} alt="The book we're reading this month" />
            <p>We’re Maja and Linnéa! (Also known as Majs and Lenny respectively). We met on the first day of university and has since then bonded over our shared love of books, ceramics, and dachshunds. We started this book club when both of us moved to Stockholm in the middle of a burning pandemic and needed a good excuse to hang out and drink wine. We might only be two people, but we read some mighty good books! Look around to find a new favourite. </p>
        </div>
    )
}

export default About