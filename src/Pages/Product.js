import MiniCart from "../Components/MiniCart";
import Card from "../Components/card";

function Product() {
    const imgSrc = [{ img: "img3.jpg" }, { img: "img4.jpg" }, { img: "img5.jpg" },{img:"img1.jpg"},{img:"img2.jpg"},{img:"img3.jpg"},{img:"img4.jpg"},{img:"img5.jpg"},{img:"img2.jpg"},{img:"img3.jpg"},{img:"img4.jpg"},{img:"img5.jpg"},{img:"img2.jpg"},{img:"img3.jpg"},{img:"img4.jpg"},{img:"img5.jpg"},{ img: "img3.jpg" }, { img: "img4.jpg" }, { img: "img5.jpg" },{img:"img1.jpg"},{img:"img2.jpg"},{img:"img3.jpg"},{img:"img4.jpg"},{img:"img5.jpg"},{img:"img2.jpg"},{img:"img3.jpg"},{img:"img4.jpg"},{img:"img5.jpg"},{img:"img2.jpg"},{img:"img3.jpg"},{img:"img4.jpg"},{img:"img5.jpg"},{ img: "img3.jpg" }, { img: "img4.jpg" }, { img: "img5.jpg" },{img:"img1.jpg"},{img:"img2.jpg"},{img:"img3.jpg"},{img:"img4.jpg"},{img:"img5.jpg"},{img:"img2.jpg"},{img:"img3.jpg"},{img:"img4.jpg"},{img:"img5.jpg"},{img:"img2.jpg"},{img:"img3.jpg"},{img:"img4.jpg"},{img:"img5.jpg"}];
    return (
            <div  className="product" style={{overflow:"hidden",margin:"2em",gap:"2em" }}>
                {imgSrc.map(function (crrVal, index) {
                    return (
                        <Card width="100%"  key={index} imgSrc={crrVal.img}  />
                    )
                })}
            </div>
    )
}
export default Product;