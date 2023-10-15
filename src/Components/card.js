import { useState } from "react";
import "../styles/transition.css";

function Card(props) {
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
        <img className="transitionAll"
            style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
            }}
            src={`/images/${props.imgSrc}`}
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
            <button index={props.index} onClick={props.HandleClick} className="customButton">{props.text}</button>
        </div>
    </div>
</div>
    
  );
}

export default Card;
