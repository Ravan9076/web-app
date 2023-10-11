import Card from "./card";


function Home(){

// let btn = Array.from(document.querySelectorAll(".HomeCard button"));
const imgSrc = [{img:"img1.jpg"},{img:"img2.jpg"}];

function HandleClick(e){
 let MiniCart = document.getElementsByClassName("MiniCart")[0];
 let btn = e.target

  if(MiniCart.style.display==="none"){
    btn.classList.toggle("isActive");
    MiniCart.style.display="flex";
  }else if(MiniCart.style.display==="flex"){
    if(btn.classList.contains("isActive")){
      btn.classList.toggle("isActive");
      MiniCart.style.display="none";}
  }

}

  let sty={
    width:"100%",
  }
    return(
      <>
      <div className="HomeCard" style={{display:"flex",height:"30em",justifyContent:"space-evenly",margin:"1em 0"}}>
      {imgSrc.map(function(crrVal,index){
                    return(
                        <Card width="30%" key={index} imgSrc={crrVal.img } HandleClick={HandleClick} />
                    )
                })}
      </div>
      </>
    )
}

export default Home;