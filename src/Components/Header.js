import React from "react";
import "../styles/transition.css";

let prop = {
  // width: "100%",
  backgroundColor: "transparent",
  fontFamily: 'Roboto',
  letterSpacing:"5px",
  minHeight:"8em",
  height:"100%"
}
function Header() {
  return (
    <>
    <header className="center" style={prop}>
      <h1 className="hvrSpace pointer">EXPLORE</h1>
    </header>
    </>
  );
}

export default Header;
