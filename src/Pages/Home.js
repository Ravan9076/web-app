import Card from "../Components/card";
import { useEffect } from "react";

function Home(){

// let btn = Array.from(document.querySelectorAll(".HomeCard button"));

function HandleClick(){
 let MiniCart = document.getElementsByClassName("MiniCart")[0];
  if(MiniCart.style.display==="none"){
    MiniCart.style.display="flex";
  }else{
    MiniCart.style.display="none";}
}

  let sty={
    width:"100%",
  }
    return(
      <>
      <div className="HomeCard" style={{display:"flex",height:"30em",justifyContent:"space-evenly",margin:"2em 0"}}>
      <Card HandleClick={HandleClick} />
      <Card HandleClick={HandleClick} />
      </div>
      </>
    )
}

export default Home;