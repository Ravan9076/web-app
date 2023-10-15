// Desc: This is the main page of the application
import { useLocation, useNavigate ,useSearchParams } from "react-router-dom";
import React, { useState } from "react";
import Home from "../Components/Home";
import "../styles/App.css";
import MiniCart from "../Components/MiniCart";
import data from "../data.json";

function Index() {
  let [index,getIndex] = useState(0);
  let [searchParams, setsearchParams] = useSearchParams();

  
  setTimeout(() => {
    let targetEle = document.getElementsByClassName("Minicart")[0];
    targetEle.classList.remove("hide");

    if(searchParams.get("visible") == "true"){
      targetEle.classList.remove("hide");
    }else{
      targetEle.classList.add("hide");
    }
  }, 0);


  // function HandleClick(e){  
  //   let targetEle = e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling;

  //   if(searchParams.get("visible") == "true"){
  //     targetEle.classList.remove("hide");
  // }else{
  //     targetEle.classList.add("hide");

  // }
  // }



  return (
    <>
      <Home callback={getIndex} data={data}/>
      <MiniCart gotIndex={index} />
    </>
 
  );
}

export default Index;
