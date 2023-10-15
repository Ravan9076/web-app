import { useSearchParams } from "react-router-dom";
import Card from "./card";
// import data from "../data.json";
function Home({ data, callback ,onClick}) {

  let [searchParams, setsearchParams] = useSearchParams();
  // let Product_Type = searchParams.get('Product_Type');

  function HandleClick(e) {
    setsearchParams({ Product_Type: e.target.innerText,visible:true})

    callback(searchParams.get('Product_Type'));
    // onClick(e)

    let targetEle = e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling;
    // targetEle.style.display = "flex";
  }

  let sty = {
    width: "100%",
  }
  return (
    <>
      <div className="HomeCard" style={{ display: "flex", height: "30em", justifyContent: "space-evenly", margin: "1em 0" }}>
        {data.Category.map(function (crrVal, index) {
          return (
            <Card width="30%" text={data.Category[index].Product_Type} key={index} index={index} imgSrc={data.Category[index].imgSrc} HandleClick={HandleClick} />
          )
        })}
      </div>
    </>
  )
}

export default Home;