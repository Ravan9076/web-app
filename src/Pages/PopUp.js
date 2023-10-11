function PopUp(){
    let sty ={
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.5)",
        top:"0px",
        left:"0px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        zIndex:"100",
        border:"2px solid red",
    }


    return(
        <>
        <div className="popUp" style={sty}>
            <div className="popUpContent">
                <h1>Pop Up</h1>
                <p>Pop Up Content</p>
            </div>
        </div>
        </>
    )
}

export default PopUp;