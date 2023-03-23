import React from "react";

function padEnter() {
    console.log("Entering password...")
}

function Keypad (){
    return (
        <div>
            <input type="password" onChange={padEnter} />
        </div>
    )
}

export default Keypad;