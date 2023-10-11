import "../styles/transition.css";

function Card(props) {
  // console.log(props.imgSrc.img);
  return (
    <div
    style={{
        width: props.width,
        height: "100%"
    }}
>

    <div
        style={{
            position: "relative",
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            border: "2px solid aqua",
            overflow: "hidden",
        }}
    >
        <img
            style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
            }}
            src={`https://picsum.photos/1920/1080?random=${Math.random()}`}
            alt="your-image-description-here"
        />
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translateX(-50%) translateY(-50%)",
            }}
        >
            <button onClick={props.HandleClick} className="customButton">CLICK</button>
        </div>
    </div>
</div>
    
  );
}

export default Card;
