import React from "react";
import {Link} from "react-router-dom";

function Button(props) {

    return (
        <Link to={props.buttonLink}> 
        <div className="Button">
           <div className="ButtonRectangle"> 
           </div>
            <button>{props.buttonText}</button>
        </div>
        </Link>
    )
}

export default Button