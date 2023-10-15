import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import Card from "./card";
import data from "../data.json";
// import data from "../data.json";
import { useEffect, useState } from "react";




function Minicart(props) {
    
    let [Product_Type]= useSearchParams();

    let Navigate = useNavigate();
    
    Product_Type = Product_Type.get("Product_Type");
    let gotIndex = Product_Type == "Mobile" ? 0 : 1;
    

    function HandleClick(e) {
        Navigate(`/Product/${Product_Type}/${e.target.innerText}`, { state: { gotIndex,Product_Type,visible:"true"} });
    }

    return (
        <div className="Minicart hide" style={{ height: "40em", flexDirection: "column", gap: "2em",margin:"3em auto" }}>
            <h1 style={{ width: "fit-content", margin: "1em auto" }}>HERE ARE SIMILAR PRODUCT</h1>
            <div style={{ display: "flex", justifyContent: "space-evenly",overflow:"hidden",width:"100%",height:"100%" }}>
                {data.Category[gotIndex].Minicart.Minicart.map(function (crrVal, index) {
                    return (
                        <Card width="30%" onClick={HandleClick} text={data.Category[gotIndex].Minicart.Minicart[index].Company} key={index} imgSrc={data.Category[gotIndex].Minicart.Minicart[index].imgSrc} HandleClick={HandleClick} />
                    )
                })}
            </div>
        </div>
    )
}
export default Minicart;