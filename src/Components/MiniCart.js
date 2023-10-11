import { NavLink, useNavigate } from "react-router-dom";
import Card from "./card";



function MiniCart() {
    const imgSrc = [{ img: "img3.jpg" }, { img: "img4.jpg" }, { img: "img5.jpg" }];

    let Navigate = useNavigate();

    function HandleClick() {
        Navigate("/Product")
    }

    return (
        <div className="MiniCart" style={{ height: "40em", display: "none", flexDirection: "column", gap: "2em",margin:"3em auto" }}>
            <h1 style={{ width: "fit-content", margin: "1em auto" }}>HERE ARE SIMILAR PRODUCT</h1>
            <div style={{ display: "flex", justifyContent: "space-evenly",overflow:"hidden",width:"100%",height:"100%" }}>
                {imgSrc.map(function (crrVal, index) {
                    return (
                        <Card width="30%" onClick={HandleClick} key={index} imgSrc={crrVal.img} HandleClick={HandleClick} />
                    )
                })}
            </div>
        </div>
    )
}
export default MiniCart;