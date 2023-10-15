import { useLocation, useNavigate, useParams } from "react-router-dom";
import MiniCart from "../Components/MiniCart";
import Card from "../Components/card";
import data from "../data.json";


function Product() {
    let gotIndex = useLocation().state.gotIndex;
    let {Company} = useParams();
    
    Company = Company.toLocaleLowerCase();
    let mapping = data.Category[gotIndex].Minicart.Products[Company];

    // To go back to the previous page
    let Location = useLocation();
    console.log(Location);

    let Navigate = useNavigate();
    let visibilty = Location.state.visible;
    let Product_Type = Location.state.Product_Type;
    console.log(visibilty,Product_Type);
    function HandleClick(){
        Navigate(`/?Product_Type=${Product_Type}&visible=${visibilty}`);
    }
    return (
            <div  className="product" style={{overflow:"hidden",margin:"2em",gap:"2em" }}>
                {mapping.map(function (crrVal, index) {
                    return (
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center",rowGap:"1em"}}>
                            <Card width="100%" text={mapping[index].Models} key={index} imgSrc={`${mapping[index].imgSrc}`}  />
                            <div key={`${index + 10} `} >
                                <h1>{mapping[index].Models}</h1>
                            </div>
                        </div>
                    )
                })}
                <button onClick={HandleClick} style={{width:"fit-content",margin:"2em auto"} }>Go Back</button>
            </div>
    )
}
export default Product;