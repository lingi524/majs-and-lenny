import React from "react";
import {Link} from "react-router-dom";
import ScrollToTop from "../../ScrollToTop";

function Button(props) {

    return (
        <div className="Button">
            <div className="ButtonRectangle"> 
            </div>
            <div className="Button2">
            <ScrollToTop />
           <Link to={props.buttonLink}> 
                <button>{props.buttonText}</button>      
            </Link>
            </div>
        </div>
  
    )
}

export default Button