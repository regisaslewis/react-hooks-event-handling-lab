import React from "react";

function whenFocused() {
  console.log("Good!");
}

function whenBlurred() {
  console.log("Hey! Eyes on me!")
}


function EyesOnMe() {
  return (
    <>
    <button onFocus={whenFocused} onBlur={whenBlurred}>Eyes on me</button>
    </>
  )
}

export default EyesOnMe;