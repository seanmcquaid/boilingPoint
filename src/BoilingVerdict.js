import React from "react";

function BoilingVerdict(props){
    if(props.temperature >= 100){
        return(
            <h1>Water is boiling</h1>
        )
    } else {
        return(
            <h1>Water is not Boiling</h1>
        )
    }
}

export default BoilingVerdict;