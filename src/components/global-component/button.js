import React from "react";
var buttonText = "This is button text";

function Button() {

    return (
        <div className="Button">
           <div className="ButtonRectangle"> 
           </div>
            <button>{buttonText}</button>
        </div>
    )
}

export default Button