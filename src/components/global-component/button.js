import React from "react";
import {Link} from "react-router-dom";

function Button(props) {

    return (
        <div className="Button">
            <div className="ButtonRectangle"> 
            </div>
            <div className="Button2">
           <Link to={props.buttonLink}> 
                <button>{props.buttonText}</button>      
            </Link>
            </div>
        </div>
  
    )
}

export default Button