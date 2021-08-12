import React from "react";
import {Link} from "react-router-dom";
var buttonText = "This is button text";

function Button() {

    return (
        <Link to="/alltbrbooks"> 
        <div className="Button">
           <div className="ButtonRectangle"> 
           </div>
            <button>{buttonText}</button>
        </div>
        </Link>
    )
}

export default Button