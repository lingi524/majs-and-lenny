import React, { useEffect, useState } from "react";
import Button from "../global-component/button";
import Footer from "../global-component/footer";
import Menu from "../global-component/menu";
import MightAlsoLike from "./mightAlsoLike";

function useWindowSize () {
    const [size, setSize] = useState(window.innerWidth);
    useEffect(()=> {
        const handleResize = () => {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return size; 
}



function ReviewPage({bookBoxData}) {

    const width = useWindowSize();
    const desktopSize = 769;

    const character = String.fromCharCode(9733);
    const bookToDisplay = bookBoxData.find(({slug})=>slug===window.location.pathname.substring(6));
    const textToDisplay = bookToDisplay.description.json.content.map((textArray)=>(textArray.content[0].value));
    const isRead = bookToDisplay.read;

    return (
        
        <div className="ReviewPage">
            <Menu />
            <div className="ReviewPageContainerDesktop">
            <img className={width<desktopSize ? "none" : "BookPageBook"} src={bookToDisplay.bookCover.url} alt="The book we're reading this month" />
            <div className="ReviewPageContainer">
            <p className="BodyText">{isRead? "Review" : "To be read" }</p>
            <h1>{bookToDisplay.title}</h1>
            <h2>{bookToDisplay.author}</h2>
            <p className= {isRead? "RatingPage" : "hidden" } ><span className="Star">{character}</span>{bookToDisplay.grade}</p>
            <img className={width>desktopSize ? "none" : "BookPageBook"} src={bookToDisplay.bookCover.url} alt="The book we're reading this month" />
            <p className="ReviewText">{textToDisplay}</p>
            <div className="ReviewPageRectangle">
                
                   <p className="BookInfo">
                    <span>Authors origin?</span>
                    <span>Year of publication?</span>
                    <span>Number of pages?</span>
                   <span>What genre is it?</span>
                    <span>Who decided?</span>
                    </p>
                    <p className="BookInfoAnswers">
                    <span>{bookToDisplay.authorsOrigin}</span>
                    <span>{bookToDisplay.yearOfPublication}</span>
                    <span>{bookToDisplay.numberOfPages}</span>
                    <span>{bookToDisplay.genre}</span>
                    <span>{bookToDisplay.whoDecidedToReadThis}</span>
                    </p>
                    
            </div>
            </div>
            </div>


            <Button buttonText={isRead? "Back to all read books" : "Back to all TBR books"} buttonLink= {isRead? "/allreadbooks" : "/alltbrbooks"} />
            
            {/* <MightAlsoLike bookBoxData={bookBoxData} /> */}
            <Footer />
        </div>
    )
}

export default ReviewPage