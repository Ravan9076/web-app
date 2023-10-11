import Card from "../Components/card";

function MiniCart() {

    function HandleClick(){
        console.log("Inside MiniCart");
      }
    
    return(
        <div  className="MiniCart" style={{height:"25em",display:"none",flexDirection:"column",gap:"2em"}}>
            <h1 style={{width:"fit-content",margin:"1em auto"}}>HERE ARE SIMILAR PRODUCT</h1>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <Card  HandleClick={HandleClick}/>
                <Card HandleClick={HandleClick}/>
                <Card HandleClick={HandleClick}/>
            </div>
        </div>
    )
}
export default MiniCart;